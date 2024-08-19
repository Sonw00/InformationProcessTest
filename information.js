
  document.querySelectorAll('.mainmenu a').forEach(item => {
    item.addEventListener('click', function(event) {
      event.preventDefault();

      
      // 모든 서브메뉴를 숨김
      document.querySelectorAll('.submenu').forEach(submenu => {
        submenu.style.display = 'none';
      });

      

      // 모든 메인 메뉴 항목의 active 클래스 제거
      document.querySelectorAll('.mainmenu a').forEach(menu => {
        menu.classList.remove('active');
      });

      // 클릭된 항목의 서브메뉴 표시
      const submenu = this.parentElement.nextElementSibling;
      if (submenu && submenu.classList.contains('submenu')) {
        submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';      }
    });
    item.addEventListener('mousedown', function(event) {
      event.preventDefault();
      
      // 클릭된 메인 메뉴 항목에 active 클래스 토글
      this.classList.toggle('active');

      // 클릭된 메인 메뉴 항목에 active 클래스 추가
      this.classList.add('active');

    });
    // item.addEventListener('mouseup', () => {
    //   this.classList.remove('active');
    // });
    // item.addEventListener('mouseleave', function(event) {
    //   event.preventDefault();
    //   this.classList.remove('active');
    // });
  });


  
  function checkAnswer_exact(questionNumber, correctAnswerText, keywords) {
    const userAnswer = document.getElementById('answer' + questionNumber).value;
    const correctAnswerElement = document.getElementById('correctAnswer' + questionNumber);
    const answerResultElement = document.getElementById('answerResult' + questionNumber);
  
    // 정확한 일치 여부 확인 (대소문자 구분)
    let correct=false;

    if (userAnswer) {
      for(const keyword of keywords){
        if(userAnswer.toLowerCase()==keyword){
          correct=true;
          break;
        }
      }
      if(correct){
        correctAnswerElement.innerHTML = correctAnswerText + ' (정확히 일치)';
        count++;
        sessionStorage.setItem("${loginId}_count", count);
      }
     else {
      correctAnswerElement.innerHTML = '오답입니다. ' + questionNumber + '번 정답은 <br/>' + correctAnswerText;
    }
  
    answerResultElement.style.display = 'block';
  }
}

  function checkAnswer(questionNumber, correctAnswerText, keywords) {
    const userAnswer = document.getElementById('answer' + questionNumber).value;
    const correctAnswerElement = document.getElementById('correctAnswer' + questionNumber);
    const answerResultElement = document.getElementById('answerResult' + questionNumber);
    let correct = false;

    if (userAnswer) {
      for (const keyword of keywords) {
        if (userAnswer.toLowerCase().includes(keyword)) {
          correct = true;
          break;
        }
      }
      if (correct) {
        correctAnswerElement.innerHTML = correctAnswerText + '<br/> (키워드 포함: "' + keywords.join(', ') + '")';
        count++;
        sessionStorage.setItem("${loginId}_count", count); // count 저장

      } else {
        correctAnswerElement.innerHTML = '오답입니다. ' + questionNumber + '번 정답은 <br/>' + correctAnswerText;
      }
      answerResultElement.style.display = 'block';
    }
  }

  function checkAnswer_and(questionNumber, correctAnswerText, keywords) {
          const userAnswer = document.getElementById('answer' + questionNumber).value;
          const correctAnswerElement = document.getElementById('correctAnswer' + questionNumber);
          const answerResultElement = document.getElementById('answerResult' + questionNumber);
          let correct = true;

          if (userAnswer) {
              for (const keyword of keywords) {
                  if (!userAnswer.toLowerCase().includes(keyword.toLowerCase())) {
                      correct = false;
                      break;
                  }
              }
              if (correct) {
                  correctAnswerElement.innerHTML = correctAnswerText + '<br/> (키워드 포함: "' + keywords.join(', ') + '")';
                  count++;
                  sessionStorage.setItem("count", count); // count 저장

              } else {
                  correctAnswerElement.innerHTML = '오답입니다. ' + questionNumber + '번 정답은 <br/>' + correctAnswerText;
              }
              answerResultElement.style.display = 'block';
          }
      }

  function eraseAnswer(questionNumber) {
    document.getElementById('correctAnswer' + questionNumber).textContent = '';
    document.getElementById('answerResult' + questionNumber).style.display = 'none';
  }

  function changePageToMain() {
    var loggedInUser = JSON.parse(sessionStorage.getItem('loggedInUser'));
    //console.log("로그인아이디 : "+loggedInUser.id);
    if(loggedInUser && loggedInUser.id){location.href = 'login.html';

    } else { location.href = 'project.html';

    };
    

  }
  document.getElementById('menuOpen').addEventListener('click', function(){
    const menu =document.getElementById('menu');
    const mainContent = document.getElementById('main-content');
    menu.style.display = menu.style.display === 'none' ? 'flex' : 'none';
    mainContent.style.marginLeft = menu.style.display === 'none' ? '120px' : '300px';

    
  }); 
  
  
