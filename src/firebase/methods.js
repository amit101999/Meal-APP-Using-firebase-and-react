import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, getDocs, doc, deleteDoc } from "firebase/firestore";
import { app } from "./config"

const db = getFirestore(app);

export const addData = async (name, idMeal, cat, img) => {
    try {
        const docRef = await addDoc(collection(db, `meals`), {
            name: name,
            mealId: idMeal,
            category: cat,
            imgUrl: img
        });
        return docRef.id;
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

export const getData = async () => {
    try {
        const querySnapshot = await getDocs(collection(db, "meals"));
        return querySnapshot;
    } catch (err) {
        console.log("Error in fetching data:", err)
    }
}

export const removeData = async (id) => {
    try {
        await deleteDoc(doc(db, "meals", id));
        console.log("Document deleted with ID: ", id);
    } catch (err) {
        console.log("Error in removing data:", err)
    }
}