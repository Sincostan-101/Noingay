// Phân tích index.html: trả JSON các câu lệnh cấp cao nhất (tên, vị trí, định danh dùng tới)
import fs from 'fs';
import {createRequire} from 'module';
const require=createRequire('/opt/node-tools/node_modules/');
const acorn=require('acorn'), walk=require('acorn-walk');
const html=fs.readFileSync(process.argv[2]||'index.html','utf8');
const m=/<script>([\s\S]*?)<\/script>(?![\s\S]*<script>[\s\S]{100000,})/.exec(html);
// lấy thẻ <script> lớn nhất
let best=null,re=/<script>([\s\S]*?)<\/script>/g,x;
while((x=re.exec(html))) if(!best||x[1].length>best[1].length) best=x;
const js=best[1], base=best.index+'<script>'.length;
const ast=acorn.parse(js,{ecmaVersion:'latest',sourceType:'script'});
const out=[];
for(const st of ast.body){
  let names=[];
  if(st.type==='VariableDeclaration') names=st.declarations.map(d=>d.id.name).filter(Boolean);
  else if(st.type==='FunctionDeclaration'||st.type==='ClassDeclaration') names=[st.id.name];
  const ids=new Set();
  walk.full(st,n=>{if(n.type==='Identifier')ids.add(n.name)});
  out.push({names,type:st.type,start:st.start,end:st.end,ids:[...ids]});
}
fs.writeFileSync(process.argv[3]||'/tmp/stmts.json',JSON.stringify({base,len:js.length,stmts:out}));
console.log(out.length,'statements');
