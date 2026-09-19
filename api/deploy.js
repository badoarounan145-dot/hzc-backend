export default async function handler(req,res){
res.setHeader('Access-Control-Allow-Origin','*');
res.setHeader('Access-Control-Allow-Methods','POST,OPTIONS');
res.setHeader('Access-Control-Allow-Headers','Content-Type');
if(req.method==='OPTIONS') return res.status(200).end();
return res.status(200).json({success:true,url:`https://${Math.random().toString(36).substring(7)}.hzc.ci`,message:"Deploy OK"});
}
