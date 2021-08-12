export default function handler(req, res) {
  // const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  // console.log("req.ip: ", req.ip);
  // console.log("headers: ", req.headers);
  // console.log("x-forwarded-for: ", req.headers['x-forwarded-for'])
  // console.log("remoteAddress: ", req.connection.remoteAddress)
  res.status(200).json({ headers: req.headers, "x-forwarded-for": req.headers['x-forwarded-for'], remoteAddress: req.connection.remoteAddress })
}