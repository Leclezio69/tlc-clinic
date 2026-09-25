import {readFileSync,existsSync} from 'node:fs';
import {resolve} from 'node:path';
import {execFileSync} from 'node:child_process';
const root=resolve('public');
const html=readFileSync(resolve(root,'index.html'),'utf8');
for(const m of html.matchAll(/(?:src|href)="([^"#]+)"/g)){
 if(/^(https?:|data:|mailto:|tel:)/.test(m[1]))continue;
 if(!existsSync(resolve(root,m[1])))throw Error(`Missing asset: ${m[1]}`);
}
const ids=new Set([...html.matchAll(/id="([^"]+)"/g)].map(m=>m[1]));
for(const m of html.matchAll(/href="#([^"]+)"/g))if(!ids.has(m[1]))throw Error(`Missing section: ${m[1]}`);
const css=readFileSync(resolve(root,'assets/fonts.css'),'utf8');
for(const m of css.matchAll(/url\(['"]?(\.\/[^)'"\s]+)['"]?\)/g))if(!existsSync(resolve(root,'assets',m[1])))throw Error(`Missing font: ${m[1]}`);
execFileSync(process.execPath,['--check',resolve(root,'app.js')],{stdio:'inherit'});
console.log('Verified JavaScript, local assets, fonts and section links. Deployment output: public/');
