let a=[1,3,0,5,0,6,0];
let li=7;
for(i=0; i<7; i++){
    if(a[i]==0){
        let temp=a[li];
        a[li]=0;
        li--;
        a[i]=temp;
        

    }
}

    console.log(a)
