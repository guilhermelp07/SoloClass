import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import firebase from "./FirebaseConfig";

const storage = getStorage(firebase);

export async function saveImage(imagePath, imageName) {

    return new Promise( async (resolve, reject) => {
        if(!imagePath) return;
        if(imagePath === '') return;
        console.log("firestoreService.saveImage -> imageName: "+imageName+", imagePath: "+imagePath);
    
        const storageRef = ref(storage, `imagens/${imageName}`);
        const metadata = {contentType: 'image/jpeg'};
        const response = await fetch(imagePath);
        const blob = await response.blob();
    
        uploadBytes(storageRef, blob, metadata)
            .then((snapshot) => {
                console.log(snapshot);
                getDownloadURL(storageRef)
                    .then((url) => {
                        console.log(`URL GRAVADA: ${url}`);
                        resolve({url: url});
                    })
                    .catch((error) => console.error(error));
            })
            .catch((error) => console.error(error));
    })
}