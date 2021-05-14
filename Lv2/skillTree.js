// 배열의 각 문자열들 중에 SKILL에 해당하는 값만 빼오고
// 스킬의 순서와 뺴온값들의 순서를 비교한다.

function solution(skill, skill_trees) {
  let count = 0;
  
  const filterdTree = skill_trees.map((value)=>{
    return value.split("").filter((value)=> skill.includes(value)).join("");
  });

  for(let i=0; i< filterdTree.length; i++){
    let isValid = true;
    for(let j=0; j < filterdTree[i].length; j++){
      if(filterdTree[i][j] !== skill[j]){
        isValid = false;
        break;
      }
    }
    if(isValid){
      count += 1;
    }
  }
  return count;
}

console.log(solution("CBD",["BACDE","CBADF","AECB","BDA"]));
