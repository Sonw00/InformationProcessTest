
var Questions = {
    "20201": [
        
    ],
    "20202": [
        
    ],
    "20203": [
        
    ],
    "20204": [
        
    ],
    "20211": [
        
    ],
    "20212": [
        
    ],
    "20213": [
        
    ],
    "20221": [
        
    ],
    "20222": [
        
    ],
    "20223": [
        
    ],

    "20231": [
        {"name":'문제 1: 아래 자바 코드에서 출력되는 값을 작성하시오.',
            "code": `\n\n 
        class Static{
 
            public int a = 20;
            static int b = 0;
                
            }
             
            public class Main{
                public static void main(String[] args) {
                    
                    int a;
                    a = 10;
                    Static.b = a;
             
                    Static st = new Static();
             
                    System.out.println(Static.b++);
                    System.out.println(st.b);
                    System.out.println(a);
                    System.out.print(st.a);
                }
            }

        `,"answer_exact":['10\n11\n10\n20'],
        "type":'java'
            },
        {"name":'문제 2: 아래 자바 코드에서 출력되는 값을 작성하시오.',
            "code": `\n\n 
        class Static{
 
            public int a = 20;
            static int b = 0;
                
            }
             
            public class Main{
                public static void main(String[] args) {
                    
                    int a;
                    a = 10;
                    Static.b = a;
             
                    Static st = new Static();
             
                    System.out.println(Static.b++);
                    System.out.println(st.b);
                    System.out.println(a);
                    System.out.print(st.a);
                }
            }

        `,"answer_exact":['art\na\naart\nart'],
        "type":'java'

            },
        {"name":'문제 3: 다음 C언어의 출력값을 작성하시오.',
            "code": `\n\n
            #include <stdio.h>
 
            int main(){
                
                char a[] = "Art";
                char* p = NULL;
                p = a;
                 
                printf("%s\\n", a);
                printf("%c\\n", *p);
                printf("%c\\n", *a);
                printf("%s\\n", p);
                 
                for(int i = 0; a[i] != '\0'; i++)
                printf("%c", a[i]);
                 
            }
            Colored

        `,
        "answer_exact":['qwe'],
        "type":'c'
            },
        {"name":'문제 4: 다음 괄호안에 들어가는 용어의 Full Name 또는 약자를 작성하시오.',
            "div":`<div class="rounded-rectangle-box">
                <p>(   )은/는 비동기적인 웹 애플리케이션의 제작을 위해 JavaScript와 XML을 이용한 비동기적 정보 교환 기법이다.
                <br>(   )은/는 필요한 데이터만을 웹서버에 요청해서 받은 후 클라이언트에서 데이터에 대한 처리를 할 수 있다. 
                <br> 보통 SOAP이나 XML 기반의 웹 서비스 프로토콜이 사용되며, 웹 서버의 응답을 처리하기 위해 클라이언트 쪽에서는 자바스크립트를 쓴다.
                <br>(   )은/는 Google Map과 Google pages에서 사용한 기술에 기반하여 제작되었다.</p></div>`,
                'answer': ['ajax', 'asynchronous javascript and xml'],
                'type':'software'
            },
        {"name":'문제 5: 아래 내용을 확인하여 괄호 안에 용어를 표안에 알맞는 값을 작성하시오.',
            "table":`
                    <thead>
                        <th style="width:100px;">구분</th>
                        <th style="max-width: 100px;">내용</th>
                    </thead>
                    <tr>
                        <td>()</td>
                        <td style="text-align:left;"> 
                            - 회선교환 방식과 데이터그램 방식의 장점을 결합한 통신 기술이다.<br>

                            - 처음 패킷으로 최적의 경로를 고정하고 경로가 고정되면 그 다음은 패킷으로 나누어 고속으로 전송할 수 있다.<br>
                           
                            - 통신기술에는 ATM이 있으며, 정해진 시간 안이나 다량의 데이터를 연속으로 보낼 때 적합하다.</td>
                    </tr>
                    <tr>
                        <td >()</td>
                        <td style="text-align:left;">	 
                            - 패킷교환 방식으로 동작하면서 IP 주소를 사용하는 인터넷을 의미한다.<br>

                            - 각 전송패킷을 미리 정해진 경로 없이 독립적으로 처리하여 교환하는 방식이다.<br>
                           
                            - 특정 교환기의 고장 시 모든 패킷을 잃어버리는 가상회선과 달리, 그 경로를 피해서 전송할 수 있으므로 더욱 신뢰가 가능하다.<br>
                           
                            - 짧은 메시지의 패킷들을 전송할 때 효과적이고 재정렬 기능이 필요하다.</td>
                    </tr>
            `,
            "answer_and":['가상회선', '데이터그램'],
            "type":'network'
            },
        {"name":'문제6: 아래 내용을 확인하여 알맞는 답을 작성하시오.',
            "div":`
            <div class="rounded-rectangle-box">
                <p>2 계층(데이터링크 계층)에서 구현되는 터널링 기술 중 하나
                <br>L2F와 PPTP가 결합된 프로토콜로 VPN과 인터넷 서비스 제공자(ISP)가 이용
                <br>
                IPsec을 함께 사용하면 PPTP보다 훨씬 안전하지만 보안보다 익명화에 더 적합</p></div>
            `,
            "answer_exact":['l2tp'],
            "type":'network'
            },
        {"name":'문제7: 아래 내용에서 괄호안에 알맞는 용어를 작성하시오.',
            "div":`
            <div class="rounded-rectangle-box">
                <p>(    )  네트워크 상의 다른 컴퓨터에 로그인하거나 원격 시스템에서 명령을 실행하고 다른 시스템으로 파일을 복사할 수 있도록 해주는 응용 프로그램 또는 그 프로토콜을 가리킨다.
                <br>(    )  보안 접속을 통한 rsh, rcp, rlogin, rexec, telnet, ftp 등을 제공하며, IP spoofing (IP스푸핑, 아이피 위/변조 기법중 하나)을 방지하기 위한 기능을 제공한다.
                <br>
                (    )  기본적으로 포트는 22번이다.</p></div>
            `,
            "answer":['ssh', 'secure shell'],
            "type":'security'

        },
        {
            "name":'문제 8: 아래 설명에 대한 알맞는 답을 작성하시오..',
            "table":`
                <thead>
                    <th style="width:100px;">구분</th>
                    <th style="max-width: 100px;">내용</th>
                </thead>
                <tr>
                    <td>( 1 )</td>
                    <td style="text-align:left;"> 
                        - 감염된 컴퓨터 시스템에서 스스로 복제해 다른 컴퓨터로 복사본을 확산시킬 수 있는 악성 프로그램이다.<br>
                        - 독자적으로 실행되며 다른 실행 프로그램이 필요하지 않으며, 파일 전송 기능을 착취하도록 설계된다..<br>
                        - 자가 복제 및 네트워크를 통한 전파도 가능하다.
                    </td>
                </tr>
                <tr>
                    <td>( 2 )</td>
                    <td style="text-align:left;">	 
                        - 정상적인 프로그램으로 가장해 사용자가 직접 컴퓨터에 설치하도록 위장하며, 백도어를 만들어 공격자가 침입할 수 있도록 만들거나 시스템을 파괴한다.<br>
                        - 정상적인 프로그램으로 위장하여 시작부터 끝까지 램에 상주하며, 시스템 내부 정보를 공격자의 컴퓨터로 빼돌리는 프로그램이다. <br>
                        - 좀비PC처럼 내부정보 유출뿐만 아니라 컨트롤까지 가능한 종류가 있고, 단순히 내부 데이터만 유출할 수 있는 타입의 트로이 목마가 있다.<br>
                        - 감염된 후에 스스로를 복제하는 능력은 없다.
                    </td>
                </tr>
                <tr>
                    <td>( 3 )</td>
                    <td style="text-align:left;">	 
                        - 대상(정상파일)을 감염시키는 형태로 실행되며, 감염시킬 대상이 존재하지 않을 때에는 실행되지 않으며 다른정상파일로의 자기 복제 기능이 있다.<br>
                        - 컴퓨터 시스템에 침입해 프로그램에 기생하며 시스템을 변경하거나 사용할 수 없도록 만드는 악성코드이다.<br>
                        - 네트워크를 통해 전파되지 않으며 방식 및 위치에 따라 여러형태로 나뉜다.
                    </td>
                </tr>
            `,
            "answer":['웜' ,'트로이목마' ,'바이러스'],
            "type":'security'
        },
        {
            "name": "문제 9. 다음 아래 코드에서 이진수를 십진수로 변환하는 코드에 대해 괄호 (a) (b)의 적합한 답을 작성하시오.",
            "code": `\n\n #include <stdio.h>
 
int main() {
 
    int input = 101110;
    int di = 1;
    int sum = 0;
 
    while (1) {
 
        if (input == 0) break
        else {
 
          sum = sum + (input (a)(b)) * di;
             di = di * 2;
             input = input / 10;
 
        }
    }
 
    printf("%d", sum);
 
    return 0;
}

        `,
        "answer_exact":['& 1'],
        "type":'c'
        },
        {
            "name": "10. 다음 보안 관련 설명으로 괄호안에 알맞는 용어를  작성하시오.",
            "div": '<div class="rounded-rectangle-box"><p> (    )은/는 TCP/IP에서 IP 패킷을 처리할 때 발생되는 문제를 알려주는 프로토콜이다.<br>(    ) 프로토콜은 보통 다른 호스트나 게이트웨이 와 연결된 네트웍에 문제가 있는지 확인하기 위한 목적으로 주로 사용된다.<br>(    ) 을/를 이용한 공격에는 (    ) Flooding가 있는데 ping 명령어를 통한 (     ) 패킷을 연속적으로 계속 보내어 서버의 요청에 응답으로 인한 다른작업을 하지 못하도록 하는 공격이다.</p></div>',
            "answer_exact":['icmp'],
            "type":'network'
        },
        {
            "name": "11. 다음은 디자인 패턴에 관한 설명이다. 설명에 내용에 알맞는 답을 고르시오. (생성/구조/행위 별로 표형태의 보기가 있습니다. ex: Builder, Bridge​  등)",
            
            "div": '<div class="rounded-rectangle-box;"><p> - 다른 무언가와 이어지는 인터페이스 역할을 하는 클래스를 의미한다.<br>- 실제 객체를 호출하면 행위를 중간에 가로채서 다른 동작을 수행하는 객체로 변경한다.<br>- 객체를 정교하게 제어해야 하거나 객체 참조가 필요한 경우 사용한다.<br>- 분리된 객체를 위임함으로써 대리 작업을 중간 단계에 삽입할 수도 있으며 분리된 객체를 동적으로 연결함으로써 객체의 실행 시점을 관리할 수도 있다.</p></div>',
            "answer":['proxy'],
            "type":'software'
            
        },
        {
            "name": "12. 다음은 데이터베이스에 관련된 내용이다. 각 괄호안에 알맞는 답을 작성하시오. (보기가 있습니다. ex: 릴레이션 스키마​  등)",
            
            "table": `
                <thead>

                    <tr>
                        <th style="width:100px;">구분</th>
                        <th style="max-width: 10px;">내용</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>(1)</td>
                        <td style="text-align:left;">
                            - 셀 수 있는 수량의 순서 있는 열거이다.<br>
                            - 어떤 요소의 집합, 혹은 테이블에서의 행을 가리키지만 일반적인 집합과는 달리 중복이 허용될 수 있다.<br>
                            - 리스트와 동일하게 여러 객체를 모아서 담으며, 숫자, 문자, 객체, 배열, 튜플 안의 튜플 전부 가능하다.
                        </td>
                    </tr>
                    <tr>
                        <td>(2)</td>
                        <td style="text-align:left;">
                            - 어느 한 시점에 릴레이션의 내용(상태), 즉 저장된 데이터 전체를 의미한다.<br>
                            - 단순히 릴레이션 또는 릴레이션 외연(Relation Extension)라고도 한다.<br>
                            - 특정 교환기의 고장 시 모든 패킷을 잃어버리는 가상회선과 달리, 그 경로를 피해서 전송할 수 있으므로 더욱 신뢰가 가능하다.<br>
                            - 짧은 메시지의 패킷들을 전송할 때 효과적이고 재정렬 기능이 필요하다.
                        </td>
                    </tr><tr>
                        <td>(3)</td>
                        <td style="text-align:left;">
                            - 특정 데이터 집합의 유니크(Unique)한 값의 개수이다.<br>
                            - 전체 행에 대한 특정 컬럼의 중복 수치를 나타내는 지표이다.
                        </td>
                    </tr>
                </tbody>
            `,
            "answer":['튜플', '릴레이션' ,'인스턴스' ,'카디널리티'],
            "type":'database'
        },
        {"name":'13. [학생] 테이블에서 학생 이름이 "민수"인 튜플을 삭제하는 쿼리를 작성하시오.',
            "table":`
                <thead>

                    <tr>
                        <th style="width:100px;">순번</th>
                        <th style="width:100px;">학년</th>
                        <th style="width:100px;">이름</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>1</td>
                        <td>종현</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>2</td>
                        <td>민수</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>3</td>
                        <td>수연</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>3</td>
                        <td>수지</td>
                    </tr>
                </tbody>
            `,
            "code":`<br>조건
- 컬럼의 값이 문자열일 경우 작은 따움표 ('  ')를 표시하시오.
- SQL 마지막에 세미콜론(;)은 표기하지 않아도 관계 없습니다.`,
"answer":['delete from 학생 where 이름 = "민수"'],
"type":'database'
        },
        {"name":'14. 다음 코드에서 괄호안에 알맞는 값을 변수명으로 작성하시오.',
            "code":`<br>public class Sort {
 
    public static void swap(int[] arr, int idx1, int idx2){
        int temp = arr[idx1];
        arr[idx1] = arr[idx2];
        arr[( 1 )] = temp;
    }
 
    public static void Usort(int[] array, int length){
        for (int i = 0; i < length; i++) {
            for (int j = 0; j < length - i - 1; j++) {
                if (array[j] > array[j + 1]) {
                    swap(array, j, j + 1);
                }
            }
        }
    }
 
    public static void main(String[] args) {
        int[] item = new int[] { 5, 3, 8, 1, 2, 7 };
        int nx = 6;   
        Usort(item, ( 2 ));
 
        for (int data : item) {
            System.out.print(data + " ");
        }
    }
}
`, "answer_and":['idx2', 'nx'],
"type":'java'
            
        },
        {"name":'15. 다음 파이썬 코드의 알맞는 출력값을 작성하시오.',
            "code":`<br>a = {'한국', '중국', '일본'}
a.add('베트남')
a.add('중국')
a.remove('일본')
a.update({'홍콩', '한국', '태국'})
print(a)`,
"answer_exact":`{'한국', '중국', '베트남', '홍콩', '태국'}`,
"type":'python'
        },
        {"name":'16. 다음 표와 SQL의 결과를 확인하여 SQL을 작성하시오.',
            "table":`
                <thead>

                    <tr>
                        <th style="width:100px;">순번</th>
                        <th style="width:100px;">과목이름</th>
                        <th style="width:100px;">점수</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>데이터베이스</td>
                        <td>89</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>데이터베이스</td>
                        <td>92</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>네트워크</td>
                        <td>88</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>소프트웨어</td>
                        <td>91</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>네트워크</td>
                        <td>89</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>소프트웨어</td>
                        <td>85</td>
                    </tr>
                </tbody>`,
                "code":`<div class="rounded-rectangle-box"><p>조건: 
- where사용하지 말하야 한다.<br>
- SELECT절에 별칭을 사용하여 작성해야 한다.<br>
- SQL 구문 마지막에 세미콜론 생락 가능하다.<br>
- 반드시 GROUP BY와 having을 사용해야 한다.<br>
- 집계함수를 사용해야 한다.</p></div?`,
                "div":`결과<br>
                <table>
                <thead>

                    <tr>
                        <th style="width:100px;">과목 이름</th>
                        <th style="width:100px;">최고 점수</th>
                        <th style="width:100px;">최대 점수</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>데이터베이스</td>
                        <td>89</td>
                        <td>92</td>
                    </tr>
                </tbody>
                </table>`,
"answer":['select 과목이름 ,min(점수) as 최소점수 , max(점수) as 최대점수 from 성적 group by 과목이름 having avg(점수)>=90'],
"type":'database'
        },
        {"name":`17. 다음 JAVA 코드에서 알맞는 출력 값을 작성하시오.`,
            "code":`<br>abstact class Vehicle {
 
    String name;
    abstract public String getName(String val);
 
    public String getName() {
            return "Vehicle name: " + name;
    }
}
 
 
 
class Car extends Vehicle {
 
    public Car(String val) {
            name=super.name=val;
    }
 
    public String getName(String val) {
            return "Car name:" + val;
    }
 
    public String getName(byte val[]) {
            return "Car name:" + val;
    }
}
 
 
public class Main {
 
    public static void main(String[] args) {
 
    Vehicle obj = new Car("Spark");
    System.out.println(obj.getName());
 
    }
}
`,"answer_exact":['vehicle name: spark'],
"type":'java'
        },
        {"name":`18. 다음은 스키마와 관련된 내용이다. 각 괄호안에 알맞는 답을 작성하시오.`,
            "table":`
                <thead>

                    <tr>
                        <th style="width:100px;">구분</th>
                        <th style="max-width: 100px;">내용</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>()스키마</td>
                        <td style="text-align:left;">
                            - 사용자나 응용 프로그래머가 개인의 입장에서 필요한 데이터베이스의 논리적 구조를 정의한다.<br>
                            - 전체 데이터베이스의 한 논리적인 부분으로 볼 수 있기 때문에 서브 스키마라고도 한다.<br>
                            - 하나의 데이터베이스 시스템에는 여러 개의 외부 스키마가 존재할 수 있다.<br>
                            - 기관이나 조직체의 관점에서 데이터베이스를 정의한 것이다
                        </td>
                    </tr>
                    <tr>
                        <td>()스키마</td>
                        <td style="text-align:left;">
                            	- 데이터베이스의 전체적인 논리적 구조로, 모든 응용 프로그램이나 사용자들이 필요로 하는 데이터를 종합한 조직 전체의 데이터베이스로 하나만 존재한다.<br>
                            - 개체 간의 관계(Relationship)와 제약 조건을 나타내고 데이터베이스의 접근 권한, 보안 및 무결성 규칙에 관한 명세를 정의한다.<br>
                            - 데이터베이스 파일에 저장되는 데이터의 형태를 나타내는 것이다.<br>
                            - 짧은 메시지의 패킷들을 전송할 때 효과적이고 재정렬 기능이 필요하다.
                        </td>
                    </tr>
                    <tr>
                        <td>()스키마</td>
                        <td style="text-align:left;">
                            - 물리적인 저장장치 입장에서 데이터가 저장되는 방법을 기술한 것이다.<br>
                            - 실제 데이터베이스에 저장될 레코드의 물리적인 구조를 정의한다. <br>
                            - 저장 데이터 항목의 표현방법, 내부 레코드의 물리적 순서, 인덱스 유/무 등을 나타낸다.<br>
                            - 시스템 프로그래머나 시스템 설계자가 관리한다.
                        </td>
                    </tr>
                </tbody>`,
                "answer_and":['외부', '개념', '내부'],
                "type":'database'
        },
        {"name":'19. 다음 아래 제어 흐름 그래프가 분기 커버리지를 만족하기 위한 테스팅 순서를 쓰시오.',
            "div":'<img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbQZ756%2FbtscHlK9JMg%2Fp6HegekRsqNyGq0RKyJ8X1%2Fimg.png"/>',
            "answer": ['1234561, 124567','1234567, 124561'],
            "type":'software'
        },
        {"name":'20. 다음 자바 코드에 대한 출력 값을 작성하시오.',
            "code":`class Parent {
    int x = 100;
 
    Parent() {
        this(500);
    }
 
    Parent(int x) {
        this.x = x;
    }
 
    int getX() {
        return x;
    }
}
 
class Child extends Parent {
    int x = 4000;
    
    Child() {
        this(5000);
    }
 
    Child(int x) {
        this.x = x;
    }
}
 
public class Main {
    public static void main(String[] args) {
        Child obj = new Child();
        System.out.println(obj.getX());
    }
}
`,
            "answer_exact":['500'],
            "type":'java'
        }
    ],
    "20232": [
        {"name":'문제 1:다음은 C언어 코드의 문제이다. 보기의 조건에 맞도록 괄호안에 알맞은 코드를 작성하시오.',
        "code":`\n\nint main(void) {
 
    int n[5];
    int i;
 
    for (i = 0; i < 5; i++) {
        printf("숫자를 입력해주세요 : ");
        scanf("%d", &n[i]);
    }
 
    for (i = 0; i < 5; i++) {
        printf("%d", (            ) );
    }
 
  return 0;
 
}`,
        "answer_exact":['n[(i+1) % 5]'],
        "type":'c'
    },
        {"name":'문제 2: 다음은 JAVA 코드 문제이다. 가지고 있는 돈이 총 4620원일 경우 1000원, 500원, 100원, 10원의 지폐 및 동전을 이용하여 보기의 조건에 맞춰 최소한의 코드를 통해 괄호안을 작성하시오.',
            "code":`\n\npublic class Problem{
        public static void main(String[] args){
        m = 4620;
     
        a = (              );
        b = (              );
        c = (              );
        d = (              );
     
        System.out.println(a); //천원짜리     4장 출력
        System.out.println(b); //오백원짜리  1개 출력
        System.out.println(c); //백원짜리     1개 출력
        System.out.println(d); //십원짜리     2개 출력
        }
    }`,
            "answer":['m / 1000\n(m % 1000) / 500\n(m % 500) / 100\n(m % 100) / 10'],
            "type":'java'
        },{
            "name":'3. 다음은 c언어의 코드이다. 보기의 조건에 맞추어 알맞은 출력값을 작성하시오.<br> (입력값은 홍길동, 김철수, 박영희 순서로 주어진다.)',
            "code":`\n\n#include<stdlio.h> 
#include<stdlib.h> 
char n[30];
char *test() {
    printf(입력하세요 : );
    gets(n);
    return n;
}
 
int main()
 
{
    char * test1;
    char * test2;
    char * test3;
 
    test1 = test();
    test2 = test();
    test3 = test();
 
    printf(%s\\n,test1);
    printf(%s\\n,test2);
    printf(%s,test3);
 
}`,
            "answer_exact":['박영희\n박영희\n박영희'],
            "type":'c'
        },{
            "name":'4. 다음은 테이블에 데이터를 삽입하기 위한 과정이다. 보기의 조건식에 맞게 데이터 삽입을 위한 SQL문을 작성하시오.',
            "div": '<div class="rounded-rectangle-box"><p> CREATE TABLE 학생 (<br>  학번 int,<br> 이름 varchar(20),<br>    학년 int,<br>   전공 varchar(30),<br>  전화번호varchar(20)<br>);</p></div>',
            "code":`<table>
            <thead>
                    <tr>
                        <th style="max-width: 100px;">학번</th>
                        <th style="max-width: 100px;">이름</th>
                        <th style="max-width: 100px;">학년</th>
                        <th style="max-width: 100px;">전공</th>
                        <th style="max-width: 100px;">전화번호</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>9830287</td>
                        <td>뉴진스</td>
                        <td>3</td>
                        <td>경영학개론</td>
                        <td>010-1234-1234</td>
                    </tr>
                </tbody>
            
            </table>
            <br>
            <p>조건 : 문자열일 경우 작은 따음표</p>
            `,
            "answer":[`INSTER INTO 학생(학번,이름,학년,전공,전화번호)
VALUES(9830287,'뉴진스',3,'경영학개론','010-1234-1234')`],
            "type":'database'
        },{
            "name":'5. 다음은 C언어의 문제이다. 알맞은 출력값을 작성하시오.',
            "code":`\n\nint n[3] = [73, 95, 82] 
sum = 0 
 
for(i=0;i<3;i++){
    sum += n[i];
}
 
switch(sum/30){
    case 10:
    case 9: printf("A");
    case 8: printf("B");
    case 7: 
    case 6: printf("C");
    default: printf("D");
}`,
            "answer_exact":['BCD'],
            "type":'c'
        },{
            "name":'6. 다음은 테스트 커버리지에 대한 내용이다. 내용을 보고 보기에 알맞는 기호를 고르시오.',
            "div":`<div class="rounded-rectangle-box">- 프로그램 내에 있는 결정포인트 내의 모든 각 개별 조건식에 대한 모든 가능한 결과(참/거짓)에 대해 적어도 한번 수행한다.<br>
- 소프트웨어 테스트 수행시 소스코드를 어느 수준까지 수행하였는가를 나타내는 기준을 나타낸다.<br>
- 실제 업무에서는 다양한 툴을 사용하여 테스팅 수행한다.<br>- True/False에충분한 영향을 줄 수 없는 경우가 발생 가능한 한계점을 지닌다.
</div>`,    "code":`<p style="font-size:14px;">보기</p>\n ㄱ. 구문 커버리지  ㄴ. 경로 커버리지  ㄷ. 조건/결정 커버리지   ㄹ. 변형 조건/결정 커버리지   

ㅂ. 다중 조건 커버리지  ㅅ. 결정 커버리지  ㅇ. 조건 커버리지   `,
            "answer":['ㅇ','조건 커버리지'],
            "type":'software'
        },{
            "name":'7. 다음 C언어 소스코드의 알맞은 출력을 작성하시오.',
            "code":`\n\n#include <stdio.h>
 
int main(){
 
    int c = 0;
 
    for(int i = 1; i <=2023; i++) { 
      if(i%4 == 0) c++; 
    }
    printf("%d", c);
}`,
            "answer_exact":['505'],
            "type":'c'
        },{
            "name":'8. 다음 내용에 알맞는 답을 작성하시오.',
            "div": `<div class="rounded-rectangle-box">- 소프트웨어에서 워터마크 삭제등과 같이 소프트웨어가 불법으로 변경(unauthorized modifications)되었을 경우, 그 소프트웨어가 정상 수행되지 않게 하는 기법이다.<br>
            - 소프트웨어 변조 공격을 방어하기 위해 프로그램에 변조검증코드(tamper-proofing code)를 삽입하는 것도 한 방법이다.<br>
            - 변조검증코드의 용도는 첫째 프로그램이 변경되었는지를 탐지하는 것이고, 둘째는 변조가 탐지되었다면 프로그램이 실행되지 않게 한다.<br>
            - 소프트웨어의 위변조 방지 역공학 기술의 일종으로 디지털 콘텐츠의 관련 산업이나 전자상거래 또는 보호해야 할 소프트웨어가 있는 다양한 산업 분야에 적용된다.</div>`,
            "answer":['템퍼프루핑','tamper-proofing'],
            "type":'software'
        },{
            "name":'9. 다음은 C언어 문제이다. 알맞은 출력값을 작성하시오.',
            "code":`\n\n#include <stdio.h>
#define MAX_SIZE 10
 
int isWhat[MAX_SIZE];
int point= -1; 
 
void into(int num) {
    if (point >= 10) printf("Full");
    isWhat[++point] = num;
}
 
int take() {
    if (isEmpty() == 1) printf("Empty");
    return isWhat[point--];
}
 
int isEmpty() {
    if (point == -1) return 1;
    return 0;
}
 
int isFull() {
    if (point == 10) return 1;
    return 0;
}
 
int main(int argc, char const *argv[]){
    int e;
    into(5); into(2);
    while(!isEmpty()){
        printf("%d", take());
        into(4); into(1); printf("%d", take()); 
        into(3); printf("%d", take()); printf("%d", take()); 
        into(6); printf("%d", take()); printf("%d", take()); 
    }
    return 0;
}`,

            "answer_exact":['213465'],
            "type":'c'
        },{
            "name":'10. 데이터베이스 설계 순서에 관한 내용이다. 보기를 이용하여 괄호안에 알맞은 내용을 작성하시오. ',
            "div":'<img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FIiEWY%2FbtsC4tQ9MMP%2FfPILNAwi4JQCqN6mofcrL1%2Fimg.png"/>',
            "code":`<p style="font-size:14px;">보기</p>\n구현, 요구조건 분석, 개념적 설계, 물리적 설계, 논리적 설계`,
            "answer_exact":['요구조건 분석','개념적 설계','물리적 설계','구현'],
            "type":'database'
        },{
            "name":'11. 다음은 디자인 패턴에 관한 문제이다. 보기에서 알맞는 답을 작성하시오.',
            
 "table":`
 <tbody>
     <tr>
         <td>( 1 )</td>
         <td style="text-align:left;">
             - 생성자가 여러 차례 호출되더라도 실제로 생성되는 객체는 하나이고 최초 생성 이후에 호출된 생성자는 최초의 생성자가 생성한 객체를 리턴한다.<br>
             - 주로 공통된 객체를 여러개 생성해서 사용하는 DBCP(DataBase Connection Pool)와 같은 상황에서 많이 사용한다.
            
         </td>
     </tr>
     <tr>
         <td>( 2 )</td>
         <td style="text-align:left;">
                 - 호스트 객체의 내부 상태에 접근할 수 있는 방법을 제공하여 호스트 객체에 연산을 추가할 수 있도록 한다.<br>
                 - 이 패턴은 보통 합성 구조의 원소들과 상호 작용하는 데 사용되며, 기존 코드를 변경하지 않고 새로운 기능을 추가하는 방법이다.
           
     </tr>
 </tbody>`, "code":`보기 <br> <table> <thead>
                    <tr>
                        <th style="width:100px;">생성</th>
                        <th style="max-width: 100px;">구조</th>
                        <th style="max-width: 100px;">행위</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>()Singleton</td>
                        <td>()Adapter</td>
                        <td>()Observer</td>
                    </tr>
                    <tr>
                        <td>Factory Method</td>
                        <td>()Bridge</td>
                        <td>()Strategy</td>
                    <tr>
                        <td>Builder</td>
                        <td>()Decorator</td>
                        <td>()Visitor</td>
                    </tr>
                </tbody>
                </table>`,

            "answer_exact":['Singleton','Visitor'],
            "type":'software'
        },{
            "name":'12. 다음 내용에서 설명하는 문제에 대해 보기에 알맞는 답을 골라 작성하시오.',
            "div": `<div class="rounded-rectangle-box">( 1 ) Code는 데이터 전송시 1 비트의 에러를 정정할 수 있는, 오류정정부호의 일종으로 미국의 Bell 연구소의 Hamming에 의해 고안되었다. 선형블록부호 및 순회부호에 속에 속한다.<br>
            ( 2 ) 은/는 송신측이 전송할 문자나 프레임에 부가적 정보(Redundancy)를 첨가하여 전송하고 수신측이 이 부가적 정보를 이용하여 에러검출 및 에러정정을 하는 방식이다.<br>
            ( 3 )은/는 공격자가 전자 메일을 사용하여 상대방이 금전을 보내거나 기밀 회사 정보를 누설하도록 유도하는 사이버 범죄의 일종이다.

공격자는 신뢰할 수 있는 인물로 가장한 다음 가짜 청구서의 지불을 요청하거나 다른 사기에서 사용할 중요한 데이터를 요구한다.<br>
( 4 ) 은/는 데이터가 저장장치 내의 한 장소에서 다른 장소로 이동되거나, 컴퓨터들간에 전송될 때, 데이터가 유실 또는 손상되었는지 여부를 점검하는 기술과 관련된 용어이다.<br>
 ( 5 ) 은/는 네트워크 등을 통하여 데이터를 전송할 때 전송된 데이터에 오류가 있는지를 확인하기 위한 체크값을 결정하는 방식을 말한다.
            </div>`, 

            "answer_exact":['EAC', 'FEC', 'hamming', 'CRC', 'PDS', 'parity', 'BEC'],
            "type":'security'
        },{
            "name":'13. 다음은 HDLC 프로토콜에 대한 설명이다. 보기 안에 알맞는 답을 골라 작성하시오.',
            "div": `<div class="rounded-rectangle-box">( 1 ) 프레임은 Seq, Next, P/F의 필드를 가진다. 또한 맨 처음 비트를 0으로 가진다. Seq는 송신용 순서번호를 가지고 있다. Next는 응답용 순서번호를 가진다. P/F는 P가 1로 설정된 경우 주국에서 종국에 데이터 전송을 허용하는 것을 의미하고 F가 1로 설정된 경우 종국에서 주국으로 데이터 전송을 하는 것을 의미한다.<br>
            ( 2 ) 프레임은 맨 앞의 필드가 1로 되어 있어 정보 프레임이 아니라는 것을 나타내고 다음 비트가 0이 나와있다. Type의 경우에는 2비트를 가지고 있어 4가지의 종류로 나누어진다.  데이터를 보내는 역할이 아니라 응답의 기능을 수행하므로 Seq에 대한 값은 필요가 없고 다음 프레임을 요구하는 Next만 존재한다.<br>
             ( 3 ) 프레임은 순서 번호가 없는 프레임을 의미한다. 첫 번째 비트와 두 번째 비트가 모두 1로 설정되어 있다. 여러 종류를 가지고 있는데 Type의 2비트와 Modifier의 3비트를 합쳐 5비트를 통해 종류를 나눈다.<br>
              ( 4 ) 은/는 두 호스트 모두 혼합국으로 동작한다. 양쪽에서 명령과 응답을 전송할 수 있다.<br>
               ( 5 ) 은/는 불균형 모드로 주국의 허락 없이 종국에서 데이터를 전송할 수 있다.

</div>`, 
"code":`<p style="font-size:14px;">보기</p>\nㄱ. 연결제어     ㄴ. 감독     ㄷ. 정보     ㄹ. 양방향 응답     ㅁ. 익명     ㅂ. 비번호
ㅅ. 릴레이    ㅇ. 동기균형     ㅈ. 동기응답    ㅊ. 비동기균형     ㅋ. 비동기응답`,

            "answer_exact":['ㄷ','ㄴ','ㅂ','ㅊ','ㅋ'],
            "type":'network'
        },{
            "name":'14. 다음은 자바에 대한 문제이다. 알맞은 출력값을 작성하시오.',
            "code":`\npublic class Main{
    public static void main(String[] args) {
        
        String str1 = 'Programming';
        String str2 = 'Programming';
        String str3 = new String('Programming');
        
        println(str1==str2)
        println(str1==str3)
        println(str1.equals(str3))
        print(str2.equals(str3))
    }
}`,

            "answer":['true\nfalse\ntrue\ntrue'],
            "type":'java'
        },{
            "name":'15. 다음 보기는 암호화 알고리즘에 대한 내용이다. 대칭키와 비대칭키에 해당하는 보기의 내용을 작성하시오',
            "div": `<div class="rounded-rectangle-box">대칭키 : (              )<br>비대칭키 : (                    )</div>`, 
            "code":`<p style="font-size:14px;">보기</p>\nDES, RSA, AES, ECC,  ARIA, SEED`,
            "answer":['대칭키: DES, AES, ARIA, SEED','비대칭키: RSA, ECC'],
            "type":'security'
        },{
            "name":'16. 다음 괄호안에 알맞는 답을 작성하시오.',
            "div": `<div class="rounded-rectangle-box">- ( ) 란 임의의 크기를 가진 데이터(Key)를 고정된 크기의 데이터(Value)로 변화시켜 저장하는 것이다.<br>
            - 키에 대한 ( ) 값을 사용하여 값을 저장하고 키-값 쌍의 갯수에 따라 동적으로 크기가 증가한다.<br>
            - ( ) 값 자체를 index로 사용하기 때문에 평군 시간복잡도가 O(1) 로 매우 빠르다<br>
            - ( ) 함수는 임의의 길이의 데이터를 고정된 길이의 데이터로 매핑하는 함수이다.<br>
            - ( ) 함수는 큰 파일에서 중복되는 레코드를 찾을 수 있기 때문에 데이터베이스 검색이나 테이블 검색의 속도를 가속할 수 있다.</div>`, 

            "answer":['해시','해싱','hash'],
            "type":'security'
        },{
            "name":'17. 다음 보기의 SQL문에서 괄호안에 알맞는 단어를 작성하시오.',
            "code":`<p style="font-size:14px;">보기</p>\nDROP VIEW 학생 (         )\n- DROP VIEW 학생 (         )`,

            "answer_exact":['cascade'],
            "type":'database'
        },{
            "name":'18. 다음 코드는 선택정렬 구현에 관한 문제이다.  오름차순으로 정렬할 경우 빈칸에 알맞는 연산자를 보기에서 골라 작성하시오.',
            "code":`\n\n#include
int main() {
    int E[] = {64, 25, 12, 22, 11};
    int n = sizeof(E) / sizeof(E[0]);
    int i = 0;
    do {
        int j = i + 1;
        do {
            if (E[i] (     ) E[j]) {
                int tmp = E[i];
                E[i] = E[j];
                E[j] = tmp;
            }
            j++;
        } while (j < n);
        i++;
    } while (i < n-1);
    for(int i=0; i<=4; i++)
        printf("%d ", E[i]);
}`,         
"code":`<p style="font-size:14px;">보기</p>\n<, <=, =>, >, ==, /, %`,

            "answer_exact":['>'],
            "type":'c'
        },{
            "name":'19. 다음 파이썬 코드에서 알맞는 출력값을 작성하시오.',
            "code":`\n\na = "engineer information processing"
b = a[:3]
c = a[4:6]
d = a[28:]
e=b+c+d
print(e)`,

            "answer_exact":['engneing'],
            "type":'python'
        },{
            "name":'20. 다음 설명에 대한 알맞는 답을 작성하시오.',
            "div": `<div class="rounded-rectangle-box"><p> 1.</p><br>
            - 하향식 테스트 시 상위 모듈은 존재하나 하위 모듈이 없는 경우의 테스트를 위해 임시 제공되는 모듈이다.<br>
            - 특별한 목적의 소프트웨어를 구현하는 것으로 컴포넌트를 개발하거나 테스트할 때 사용된다.<br>
            - 서버-클라이언트 구조에서 서버만 구현된 상태로 테스트를 해보고 싶을때 단순히 값만 넘겨주는 가상의 클라이언트를 만들어서 테스트 할 수 있다.<br><br>
            <p> 2.</p><br>
            - 상향식 테스트 시 상위 모듈 없이 하위 모듈이 존재할 때 하위 모듈 구동 시 자료 입출력을 제어하기 위한 제어 모듈(소프트웨어)이다.<br>
            - 서버-클라이언트 구조에서 클라이언트만 구현된 상태로 테스트를 해보고 싶을때 접속 인증 등의 간단한 기능만 하는 가상의 서버를 만들어서 테스트 할 수 있다.

            </div>`, 


            "answer_exact":['스텁','드라이버'],
            "type":'software'
        }
    ],
    "20233": [
    ],
    "20241": [
        
    ],
    "20242": [
        
    ],
};