# kakao-bank

💰 HTML/CSS를 활용한 팀 프로젝트- 2조 카카오뱅크   
- [클론 페이지 보기](https://chacha912.github.io/kakao-bank/index.html)  
- [발표자료 보기](./2팀발표자료.pdf)

# 카카오뱅크

html 과 css를 이용해서 카카오뱅크를 클론코딩하는 팀 프로젝트를 진행했다. 하지만 똑같이 만들어내는건 의미가 없다고 생각하고, 라이트하우스 점수를 기준으로 더 개선을 하는 것에 중점을 두었다.  
![카뱅 라이트 하우스 점수](https://images.velog.io/images/lky9303/post/74da1d18-2bb3-4e3a-98f9-249f70d2d7fe/image.png)

## 카카오뱅크를 선택한 이유

카카오뱅크 웹페이지의 점수가 다른 대기업들에 비해 낮았었다.

때문에 우리 팀이 개선할 여지가 있다고 생각했다.

## 마인드 세팅

카카오뱅크의 컨설팅을 한다고 생각했다. 카카오라고 해서 모든게 완벽하게 되어있을 것이라 생각하지 않았다.

크게 접근성, 마크업, 성능 세 가지 부분에서 고칠 부분을 찾았고, 해결 방법을 찾아냈다.

## 일정 & 역할분담

접근성 담당, 마크업 담당, 성능 담당 세 명으로 구성했다. 해당 부분은 책임지고 개선하기로 했고, 각자는 페이지를 (헤더, 푸터), 상품설명 페이지, 이벤트 페이지로 나누어 작업했다.

![image](https://user-images.githubusercontent.com/81357083/118091300-9609e880-b405-11eb-9194-7d8f30a53c16.png)


## 코딩 컨벤션

![](https://images.velog.io/images/lky9303/post/ad065656-3098-4ac3-8889-1f4dde458f3f/image.png)

## 문제

### 접근성

![](https://images.velog.io/images/lky9303/post/153edc73-69c8-4b62-8e5a-202c917bfdc1/image.png)

위와 같은 문제가 있었고, 해당 문제들을 KWCAG 지침에서 찾아보았을 때는 아래와 같이 정리할 수 있었다.

![](https://images.velog.io/images/lky9303/post/dfc5a68b-51a1-457d-bd22-6ef3e2aa5653/image.png)

1. **구체적이지 않은 대체 텍스트**

2. **컨텐츠 간의 명도/채도 대비 부족**

3. **메가메뉴의 키보드 접근성 부족**

4. **탭 아웃라인의 비정상적 출력**

### 마크업

1. **메뉴의 depth가 너무 깊음**

2. **디자인을 위한 과도한 태그 사용**

3. **잘못된 WAI-ARIA 사용**

### 성능

1. **모바일 페이지에서 스프라이트 이미지 미사용**

2. **페이지에서 사용하지 않는 이미지 로딩**

3. **비효율적인 js 파일 요청 방식**

## 해결

### 접근성

#### 1. 이미지와 대체 텍스트 중복

<img src="https://images.velog.io/images/lky9303/post/fdbab5f5-b90b-4aa4-b25b-24986b2ff179/image.png" width="600"/>

#### 2. 명도 대비 문제

<img src="https://images.velog.io/images/lky9303/post/f89a8164-8d4e-4df6-bc65-f154d086cf8f/image.png" width="600"/>

#### 3. 색상이 유일한 구분점인 문제

<img src="https://images.velog.io/images/lky9303/post/61b03bfe-98a1-4560-a595-feeecbe4d5f2/image.png" width="600"/>

#### 4. 네비게이션 탭 이동

네비게이션 탭을 엔터로 열 수 없어, 다음 탭으로 이동할 때 많은 양의 탭을 눌러야 이동할 수 있음.
필요한 부분에서 엔터를 이용해 접근하도록 구현

#### 5. 포커스 아웃라인이 잘리는 문제

<img src="https://images.velog.io/images/lky9303/post/c2a7611e-b620-4300-be7c-ce3b1efcd1a3/image.png" width="600"/>

### 마크업

#### 1. 메가 메뉴 적용

- 카카오뱅크의 메뉴는 depth3까지 들어가므로 메가 메뉴를 적용해봄
- depth2 메뉴에 어떤 시맨틱한 태그를 사용하면 좋을지 고민
- depth가 깊어지더라도 기본 시맨틱한 태그를 사용하는 게 좋다는 결론을 내림. 따라서 ul-li-a 로 리스트와 링크 정보를 모두 제공 
- aria의 property와 state를 통해 추가 정보 제공
- 추후 js를 이용해 키보드 인터렉션을 구현할 수 있다면 더 좋은 접근성을 만들어낼 수 있을 것.

#### 2. 스타일을 위한 마크업을 의미있게 개선

![](https://images.velog.io/images/lky9303/post/8bd57d5e-635a-4e7c-9539-d4a05345d4ec/image.png)  

카카오뱅크 페이지 전체적으로 굵은 글자를 표시하기 위해 `strong`태그를 사용함  
strong 태그는 내용을 강조하는 의미로, 단지 굵은 글자 스타일을 위한 사용은 시맨틱한 태그 사용이라고 보기 어려움  
위의 경우, `기본 금리`는 `연 0.1%` 라는 key-value 값으로 볼 수 있으므로 dl-dt-dd 태그를 적용

#### 3. 시맨틱한 태그로 부족할 경우, 적절한 wai-aria 사용

![image](https://user-images.githubusercontent.com/81357083/118091106-65c24a00-b405-11eb-8f28-1d639ecd0704.png)

wai-aria practice의 메뉴, 탭, 아코디언 UI 예시 참고하여 적용

### 성능

#### 1. 모바일 페이지에서 스프라이트 미사용

<img src="https://images.velog.io/images/lky9303/post/5b38efe2-f6fe-425b-9ef5-ca6be9d84e22/image.png" width="600"/>

모든 이미지를 개별적으로 요청하고 있었다. 이를 스프라이트 이미지로 만들어서 더 효율적인 요청을 하도록 만들어 주었다.

#### 2. 사용하지 않는 이미지 요청

<img src="https://images.velog.io/images/lky9303/post/f8f60780-c788-4ef1-81f9-a93a743ae5e3/image.png" width="400"/>

이 페이지에서는 위의 이미지의 빨간 박스 쳐진 이미지 만을 사용하고 있었는데도 불구하고 다른 이미지까지 스프라이트 이미지에 포함되어있었다. 사용하지 않는 이미지를 제거하고 스프라이트 이미지를 만들어 더 효율적인 요청을 하도록 만들었다.

#### 3. 비효율적인 js 요청 방식

![](https://images.velog.io/images/lky9303/post/490eb61b-609d-4de5-9639-12cd5d2bc888/image.png)

위의 이미지를 보면 자바스크립트 파일을 html 파싱 도중에 불러오거나 html 파싱이 끝나고 불러오고 있었다. 이는 자바스크립트 파일에서 DOM 에 접근할 때 파싱이 끝나지 않았는데 접근하는 상황을 막기 위해서 강제적으로 동기화 시키고 있는 것이다. 이렇게 되면 html 파일의 파싱 도중에 파싱을 막고 자바스크립트를 불러오게 되는데, 이는 성능 저하를 야기한다. 때문에 해당 자바스크립트를 모두 헤드 부분으로 옮기고, 자바스크립트 이벤트 핸들러 실행을 돔 컨텐츠가 모두 로드되어있을 때 실행하도록 설정하였다. 이렇게 하면 파일 호출은 비동기적으로 실행할 수 있고, 없는 돔에 접근하는 오류 상황도 막을 수 있다.

## 결과

### 웹표준검사

![웹표준검사](https://user-images.githubusercontent.com/81357083/118090454-8e960f80-b404-11eb-9c47-ab623e261542.png)

### 라이트 하우스 검사 결과

#### 입출금통장 페이지 데스크탑

![](https://images.velog.io/images/lky9303/post/2abe38ce-7389-483f-b379-dc83284074d2/image.png)

#### 입출금통장 페이지 모바일

![](https://images.velog.io/images/lky9303/post/cd480b3d-3013-4bf9-9c20-9e09c35042a7/image.png)

#### 이벤트 페이지 데스크탑

![](https://images.velog.io/images/lky9303/post/d3fea0ac-76c6-4c6c-99bf-046271beb383/image.png)

#### 이벤트 페이지 모바일

![](https://images.velog.io/images/lky9303/post/34ae6f6b-6e74-4457-87fc-3afda3c89a34/image.png)
