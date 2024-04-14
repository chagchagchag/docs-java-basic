(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[953],{1085:function(s,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/java-features/java-17",function(){return n(9063)}])},9063:function(s,e,n){"use strict";n.r(e),n.d(e,{__toc:function(){return a}});var o=n(5893),r=n(2673),i=n(373),l=n(8426);n(9128);var t=n(2643);let a=[{depth:2,value:"Java 17",id:"java-17"},{depth:2,value:"참고자료",id:"참고자료"},{depth:2,value:"개인적인 생각",id:"개인적인-생각"},{depth:2,value:"요약",id:"요약"}];function _createMdxContent(s){let e=Object.assign({h2:"h2",ul:"ul",li:"li",a:"a",p:"p",img:"img",pre:"pre",code:"code",span:"span"},(0,t.a)(),s.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h2,{id:"java-17",children:"Java 17"}),"\n",(0,o.jsx)(e.h2,{id:"참고자료",children:"참고자료"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.a,{href:"https://blogs.oracle.com/javakr/post/jdk-17",children:"JDK 17 발표 및 새로운 변화 - blogs.oracle.com"})}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.a,{href:"https://madplay.github.io/post/what-is-new-java-17",children:"자바17의 새로운 기능들, 3년 만에 LTS 버전 릴리즈"})}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.a,{href:"https://velog.io/@riwonkim/Java-17%EB%A1%9C-%EC%A0%84%ED%99%98%EC%9D%84-%EA%B3%A0%EB%A0%A4%ED%95%B4%EC%95%BC-%ED%95%98%EB%8A%94-%EC%9D%B4%EC%9C%A0",children:"Java 17로 전환을 고려해야 하는 이유"})}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.a,{href:"https://techblog.gccompany.co.kr/%EC%9A%B0%EB%A6%AC%ED%8C%80%EC%9D%B4-jdk-17%EC%9D%84-%EB%8F%84%EC%9E%85%ED%95%9C-%EC%9D%B4%EC%9C%A0-ced2b754cd7",children:"우리팀이 JDK17을 도입한 이유"})}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.a,{href:"https://revf.tistory.com/253",children:"JDK17 이제는 AdoptOpenJDK 대신 Eclipse Temurin 사용"})}),"\n"]}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(e.h2,{id:"개인적인-생각",children:"개인적인 생각"}),"\n",(0,o.jsxs)(e.p,{children:["이 글을 처음 썼을 때는 1년전인 2023년도 3월이었고, 지금은 새로운 버전으로 글을 쓰고 있습니다. 현 시점에서 Java 보다는 Kotlin 을 선호하는 편이지만 Java 는 무시할 수 없는 가장 편한 언어로 생각하고 있습니다. 만약 프로젝트를 새로한다면 Java 17 을 선택하게 될 것 같습니다.",(0,o.jsx)("br",{})]}),"\n",(0,o.jsxs)(e.p,{children:["Java 17 은 LTS 버전이며 버그픽스도 많이 되어 있는 편이기에 어느 정도의 최신 Java 스펙을 갖추고 있으면서 오랫동안 지원이 되는 Java 버전을 원한다면 Java 17 을 선택하는 것도 나쁘지 않은 선택으로 보입니다. 또한 Java 11 ~ 16 사이에 추가된 문법적인 편의성을 두루 포함하고 있습니다.",(0,o.jsx)("br",{})]}),"\n",(0,o.jsx)(e.h2,{id:"요약",children:"요약"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:"LTS 주기 변경"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"JDK 17 부터 LTS 버전에 대한 주기를 2년으로 변경 (JDK 17 이전에는 LTS 주기가 3년)"}),"\n",(0,o.jsx)(e.li,{children:"2021년 9월 발표된 JDK 17의 다음 LTS 버전은 2년 후인 2023년 9월에 발표될 예정 (이글을 쓰는 현재날짜는 2023년 3월 19일)"}),"\n",(0,o.jsx)(e.li,{children:"참고) LTS 주기 변경하기 전에는 2024년 9월 발표 예정이었다."}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:"새로운 라이선스 적용"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"JDK 17부터는 NTFC (Oracle No-Fee Terms and Conditions) 라이선스를 적용해서 배포."}),"\n",(0,o.jsx)(e.li,{children:"JDK 17 이전에는 OTN (Oracle Technology Network) 라이선스."}),"\n",(0,o.jsx)(e.li,{children:"NTFC 라이선스에서는 개발자들이 많이 사용하는 SDKMAN 과 같은 배포,설치 툴을 이용해 Oracle JDK를 받을 수 있다. 다만, 배포의 경우 추가로 비용을 받지 않는 경우에만 허용된다. (참고. oracke jdk 배포를 의미함.)"}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:"참고) JDK 17 기여도"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.a,{href:"https://bugs.openjdk.java.net/secure/Dashboard.jspa",children:"JDK Bug System"})," 에 등록된 2645 개의 버그 중 1774개 외의 871 개의 문제점들을 다른 기관들의 참여로 이루어졌다고 함"]}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.img,{src:"https://blogs.oracle.com/content/published/api/v1.1/assets/CONT29FF518FBD194014A44A4B45D73D3178/Medium?cb=_cache_29b4&format=jpg&channelToken=9f64ca71eafc4506a34742bbaa3ee777",alt:""})}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.a,{href:"https://openjdk.org/jeps/406",children:"JEP 406, Preview"}),". Switch~Case 문에 Pattern Matching 사용가능"]}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:"case 문을 람다 기반으로 작성 가능하다. 이때 null 데이터도 조금 더 간편하게 다룰 수 있게 되었다."}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:"다만 아직 여전히 Preview 단계다."}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:"e.g."}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.pre,{"data-language":"java","data-theme":"default",children:(0,o.jsxs)(e.code,{"data-language":"java","data-theme":"default",children:[(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"public"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"void"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"printHello("}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"String"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:" s)"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"{"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"switch"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(s){"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"case"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"null"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"->"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"System"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"out"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"println"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"널 이에요"'}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"); "})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"case"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"hello"'}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"world"'}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"->"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"System"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"out"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"println"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"안녕하세요"'}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:");"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"->"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"System"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"out"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"println"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"디폴트"'}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:");"})]}),"\n",(0,o.jsx)(e.span,{className:"line",children:(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,o.jsx)(e.span,{className:"line",children:(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(e.pre,{"data-language":"text","data-theme":"default",children:(0,o.jsx)(e.code,{"data-language":"text","data-theme":"default",children:(0,o.jsx)(e.span,{className:"line",children:(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"}})})})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:"case 문에 기본타입 외에도 모든 참조 타입을 사용할 수 있게 되었다."}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:"이전에는 primitive 타입(기본타입), 일치하는 박스 타입(Character, Byte, Short, Integer 등), String, enum 타입만 허용됐었다."}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:"e.g."}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.pre,{"data-language":"java","data-theme":"default",children:(0,o.jsxs)(e.code,{"data-language":"java","data-theme":"default",children:[(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"record"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"Point"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"int"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" i"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"int"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" j) {}"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"enum"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"Color"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" { RED"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" GREEN"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" BLUE; }"})]}),"\n",(0,o.jsx)(e.span,{className:"line",children:" "}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"static"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"void"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"typeTester("}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"Object"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:" o)"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"	"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"switch"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" (o) {"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"		"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"case"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"null"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"     "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"->"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"System"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"out"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"println"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"null"'}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:");"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"		"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"case"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"String"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" s "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"->"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"System"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"out"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"println"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"String"'}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:");"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"		"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"case"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"Color"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" c  "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"->"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"System"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"out"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"println"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"Color with "'}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"+"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"Color"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"values"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"()"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"length"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"+"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'" values"'}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:");"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"		"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"case"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"Point"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" p  "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"->"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"System"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"out"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"println"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"Record class: "'}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"+"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"p"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"toString"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"());"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"		"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"case"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"int"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"[] ia "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"->"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"System"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"out"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"println"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"Array of ints of length"'}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"+"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"ia"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"length"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:");"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"		"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"       "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"->"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"System"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"out"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"println"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"Something else"'}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:");"})]}),"\n",(0,o.jsx)(e.span,{className:"line",children:(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"	}"})}),"\n",(0,o.jsx)(e.span,{className:"line",children:(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:"instanceof 사용 문법 간소화"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["e.g.","\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["기존 : ",(0,o.jsx)(e.code,{children:"if(o instanceof String){ ... }"})]}),"\n",(0,o.jsxs)(e.li,{children:["자바17 : ",(0,o.jsx)(e.code,{children:"if(o instanceof String s) { ... }"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"변수 s를 사용하는 코드를 if 문 안에서 사용 가능하다."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.a,{href:"https://openjdk.org/jeps/409",children:"JEP 409"})," sealed class"]}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"코틀린에서 사용하는 sealed class와 거의 유사한 기능이 지원된다."}),"\n",(0,o.jsxs)(e.li,{children:["sealed class 는 JDK15 에서 Preview (",(0,o.jsx)(e.a,{href:"https://openjdk.org/jeps/360",children:"JEP 360"}),") 로 제안되었고, JDK 16 에서 Second Preview (",(0,o.jsx)(e.a,{href:"https://openjdk.org/jeps/397",children:"JEP 397"}),")로 수정제안된 이력이 있다."]}),"\n"]}),"\n"]}),"\n"]})]})}let c={MDXContent:function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,t.a)(),s.components);return e?(0,o.jsx)(e,{...s,children:(0,o.jsx)(_createMdxContent,{...s})}):_createMdxContent(s)},pageOpts:{filePath:"pages/java-features/java-17.mdx",route:"/java-features/java-17",timestamp:1713080196e3,pageMap:[{kind:"MdxPage",name:"index",route:"/"},{kind:"Folder",name:"java-features",route:"/java-features",children:[{kind:"MdxPage",name:"java-10",route:"/java-features/java-10"},{kind:"MdxPage",name:"java-11",route:"/java-features/java-11"},{kind:"MdxPage",name:"java-16",route:"/java-features/java-16"},{kind:"MdxPage",name:"java-17",route:"/java-features/java-17"},{kind:"MdxPage",name:"java-21",route:"/java-features/java-21"},{kind:"MdxPage",name:"java-8",route:"/java-features/java-8"},{kind:"MdxPage",name:"java-9",route:"/java-features/java-9"},{kind:"Meta",data:{"java-8":"Java 8","java-9":"Java 9","java-10":"Java 10","java-11":"Java 11","java-16":"Java 16","java-17":"Java 17","java-21":"Java 21"}}]},{kind:"MdxPage",name:"java-features",route:"/java-features"},{kind:"MdxPage",name:"jvm",route:"/jvm"},{kind:"Folder",name:"lombok-effective-how-to",route:"/lombok-effective-how-to",children:[{kind:"MdxPage",name:"builder-object-creation-builder-variation",route:"/lombok-effective-how-to/builder-object-creation-builder-variation"},{kind:"MdxPage",name:"builder-object-creation-static-factory-method",route:"/lombok-effective-how-to/builder-object-creation-static-factory-method"},{kind:"MdxPage",name:"builder-object-creation-validation-check",route:"/lombok-effective-how-to/builder-object-creation-validation-check"},{kind:"MdxPage",name:"stop-using-data-annotation",route:"/lombok-effective-how-to/stop-using-data-annotation"},{kind:"Meta",data:{"stop-using-data-annotation":"@Data 애노테이션은 가급적 사용을 피하자","builder-object-creation-validation-check":"객체 생성시 유효성 체크는 철저히","builder-object-creation-builder-variation":"객체 생성 빌더를 용도별로 구별하자","builder-object-creation-static-factory-method":"빌더를 통해 객체생성은 정적 팩토리 메서드로"}}]},{kind:"MdxPage",name:"lombok-effective-how-to",route:"/lombok-effective-how-to"},{kind:"Folder",name:"object",route:"/object",children:[{kind:"MdxPage",name:"3-cowork-responsibility-role",route:"/object/3-cowork-responsibility-role"},{kind:"MdxPage",name:"9-flexible-design",route:"/object/9-flexible-design"},{kind:"Meta",data:{"3-cowork-responsibility-role":"3. 협력, 책임, 역할","9-flexible-design":"9. 유연한 설계"}}]},{kind:"MdxPage",name:"object",route:"/object"},{kind:"MdxPage",name:"tdd",route:"/tdd"},{kind:"Meta",data:{index:"Introduction",jvm:"JVM","java-features":"Java Features",object:"Object","lombok-effective-how-to":"롬복, 효율적으로 쓰자",tdd:"TDD",contact:{title:"Contact ↗",type:"page",href:"-",newWindow:!0}}}],flexsearch:{codeblocks:!0},title:"Java 17",headings:a},pageNextRoute:"/java-features/java-17",nextraLayout:i.ZP,themeConfig:l.Z};e.default=(0,r.j)(c)},8426:function(s,e,n){"use strict";var o=n(5893);n(7294);let r={logo:(0,o.jsx)("span",{children:"Docs Java Basic"}),project:{link:"https://github.com/chagchagchag/docs-java-basic"},docsRepositoryBase:"https://github.com/chagchagchag/docs-java-basic",footer:{text:"Nextra Docs Template"}};e.Z=r},5789:function(){}},function(s){s.O(0,[774,796,888,179],function(){return s(s.s=1085)}),_N_E=s.O()}]);