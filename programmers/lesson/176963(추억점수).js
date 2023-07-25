function solution(name, yearning, photo) {
    var answer = [];
    var photoProps = [];
    
    //이름에 값 할당
    for(var i=0; i<name.length; i++){
        photoProps[name[i]] = yearning[i]; // [may] = 5;
    }
    
    
    for(var i=0; i<photo.length; i++){
        var total=0;
            
        for(var j=0; j<photo[i].length; j++){
            if( photoProps[photo[i][j]] != undefined ){
                total += photoProps[photo[i][j]];
            }
        }
        answer[i] = total;
    }

    return answer;
}