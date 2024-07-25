let grid=8;
let chestboard='';

for(let row=0;row<=grid;row++){
    for(let col=0;col<grid;col++){
        if((row+col)%2===0){
            chestboard+=' ';
        }
        else{
            chestboard+='#';
        }
    }
    chestboard+='\n';
}
console.log(chestboard);