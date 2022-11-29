import { getTanaman, insertTanaman } from "../../controllers/tanamanController";

export default function handler(req, res) {
  if (req.method === "GET") {
    try {
      getTanaman().then((getDB) => {
        res.status(200).json({tanaman: getDB});
      });
    } catch (error) {
      res.status(400).json({status: error});
    }
  }
  if (req.method === "POST") {
    try {
      insertTanaman(req).then(
        () => {
          res.status(201).json({status: "Berhasil"});
        }
      );
    } catch (error) {
      res.status(400).json({status: error});
    }
  }
}
