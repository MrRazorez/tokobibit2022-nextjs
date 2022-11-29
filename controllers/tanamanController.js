import * as fireDB from "firebase/database";
import { config } from "../config-firebase";

var db = fireDB.getDatabase(config);

export const getTanaman = async () => {
    var getDB = null;
    await fireDB.get(fireDB.child(fireDB.ref(db), "tanaman")).then(
        (hasil) => {
            getDB = hasil.val();
        }
    );

    return getDB;
}

export const insertTanaman = async (req) => {
    await fireDB.push(fireDB.ref(db, "tanaman"), {
        nama: req.body.nama,
        harga: Number(req.body.harga)
    });
}