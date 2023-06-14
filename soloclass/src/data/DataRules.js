let soilProfileList = [];

export function getSoilProfileList(){ return soilProfileList }

export function setSoilProfileList(list){ soilProfileList = list }

export function addProfile(item){

    let index = soilProfileList.length;

    soilProfileList[index] = {
        id: soilProfileList.length,
        profileName: item.profileName,
        lowerLimit: item.lowerLimit,
        upperLimit: item.upperLimit,
        humanActivity: item.humanActivity
    }
    console.log("soilProfileList.length: "+soilProfileList.length);
    console.log("criou o elemento no index "+index);
}

export function deleteProfile(id){
    for(let i=0; i<soilProfileList.length; i++){
        if(soilProfileList[i].id === id){
            soilProfileList.splice(i, 1);
            console.log("deletou o elemento com id "+id+", posição "+i);
            return true;
        }
    }
    return false;
}

export function resetSoilProfileList(){
    setSoilProfileList([]);
}

export function getStringDrenagem(intensidade){
    switch (intensidade){
        case 0: { return 'Não informada'; }
        case 1: { return '1 - Excessiva'; }
        case 2: { return '2 - Forte'; }
        case 3: { return '3 - Acentuada'; }
        case 4: { return '4 - Boa'; }
        case 5: { return '5 - Moderada'; }
        case 6: { return '6 - Imperfeita'; }
        case 7: { return '7 - Ruim'; }
        case 8: { return '8 - Péssima'; }
    }
}