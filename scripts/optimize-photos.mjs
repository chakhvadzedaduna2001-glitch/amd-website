import sharp from 'sharp'
import fs from 'fs'
import path from 'path'
const dir='src/assets/gallery',orig='photos-original'
fs.mkdirSync(orig,{recursive:true})
for(const f of fs.readdirSync(dir)){
  if(!/\.(jpe?g|png)$/i.test(f))continue
  const out=path.join(dir,f.replace(/\.[^.]+$/,'')+'.webp')
  await sharp(path.join(dir,f)).rotate().resize({width:1600,withoutEnlargement:true}).webp({quality:78}).toFile(out)
  fs.renameSync(path.join(dir,f),path.join(orig,f));console.log('✔',f)
}
