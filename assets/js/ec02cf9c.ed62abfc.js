"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9175],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,h=u["".concat(s,".").concat(m)]||u[m]||p[m]||r;return n?i.createElement(h,o(o({ref:t},d),{},{components:n})):i.createElement(h,o({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7736:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=n(7462),a=(n(7294),n(3905));const r={slug:"weekly-update-1",title:"Weekly Update",authors:{name:"Vicente Barros",title:"Nea Team",url:"https://github.com/v1centebarros",image_url:"https://nea-news.github.io/about/assets/img/team/vicente.jpg"},tags:["weekly-update","frontend","nlp","sentiment-analysis"]},o="Weekly Project Update: News Gatherer and Sentiment Analysis",l={permalink:"/documentation/blog/weekly-update-1",editUrl:"https://github.com/nea-news/documentation/blog/2023-03-26-weekly-update.md",source:"@site/blog/2023-03-26-weekly-update.md",title:"Weekly Update",description:"This week was packed with significant progress in our news gatherer and sentiment analysis project. In this blog post, we will delve into the key achievements made over the past week, which include:",date:"2023-03-26T00:00:00.000Z",formattedDate:"March 26, 2023",tags:[{label:"weekly-update",permalink:"/documentation/blog/tags/weekly-update"},{label:"frontend",permalink:"/documentation/blog/tags/frontend"},{label:"nlp",permalink:"/documentation/blog/tags/nlp"},{label:"sentiment-analysis",permalink:"/documentation/blog/tags/sentiment-analysis"}],readingTime:2.855,hasTruncateMarker:!1,authors:[{name:"Vicente Barros",title:"Nea Team",url:"https://github.com/v1centebarros",image_url:"https://nea-news.github.io/about/assets/img/team/vicente.jpg",imageURL:"https://nea-news.github.io/about/assets/img/team/vicente.jpg"}],frontMatter:{slug:"weekly-update-1",title:"Weekly Update",authors:{name:"Vicente Barros",title:"Nea Team",url:"https://github.com/v1centebarros",image_url:"https://nea-news.github.io/about/assets/img/team/vicente.jpg",imageURL:"https://nea-news.github.io/about/assets/img/team/vicente.jpg"},tags:["weekly-update","frontend","nlp","sentiment-analysis"]},nextItem:{title:"Hello World!",permalink:"/documentation/blog/hello-world"}},s={authorsImageUrls:[void 0]},c=[{value:"Development of the User-Oriented Homepage",id:"development-of-the-user-oriented-homepage",level:2},{value:"React",id:"react",level:3},{value:"Tailwind CSS",id:"tailwind-css",level:3},{value:"Training NLP Models for Sentiment Analysis and Entity Detection",id:"training-nlp-models-for-sentiment-analysis-and-entity-detection",level:2},{value:"Sentiment Analysis",id:"sentiment-analysis",level:3},{value:"Entity Detection",id:"entity-detection",level:3},{value:"Future Work",id:"future-work",level:2},{value:"Topic Identification",id:"topic-identification",level:3},{value:"Elasticsearch Implementation",id:"elasticsearch-implementation",level:3},{value:"UI Development for Search, Profile, and Individual Article Pages",id:"ui-development-for-search-profile-and-individual-article-pages",level:3},{value:"Conclusion",id:"conclusion",level:2}],d={toc:c},u="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This week was packed with significant progress in our news gatherer and sentiment analysis project. In this blog post, we will delve into the key achievements made over the past week, which include:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Developing a user-oriented homepage featuring news articles and categories"),(0,a.kt)("li",{parentName:"ol"},"Training Natural Language Processing (NLP) models for sentiment analysis and entity detection")),(0,a.kt)("p",null,"In addition, we will discuss the future work that lies ahead, including the training of models for topic identification, implementing Elasticsearch mechanics, and designing UI components for search, profile, and individual article pages."),(0,a.kt)("h2",{id:"development-of-the-user-oriented-homepage"},"Development of the User-Oriented Homepage"),(0,a.kt)("p",null,"We have successfully developed a homepage that showcases news articles tailored to the user's taste, complete with the categories they belong to. Our tech stack for this task comprised ",(0,a.kt)("strong",{parentName:"p"},"React")," and ",(0,a.kt)("strong",{parentName:"p"},"Tailwind CSS"),"."),(0,a.kt)("h3",{id:"react"},"React"),(0,a.kt)("p",null,"React was utilized as the frontend library to create an efficient and interactive user interface. This choice facilitated the development of reusable components, which not only improved the code maintainability but also expedited the overall development process."),(0,a.kt)("h3",{id:"tailwind-css"},"Tailwind CSS"),(0,a.kt)("p",null,"Tailwind CSS played a crucial role in styling the homepage. It is a utility-first CSS framework that provides a wide range of pre-designed classes to build modern and responsive designs. This made it easier to achieve a visually appealing and user-friendly layout without the need to write custom CSS."),(0,a.kt)("h2",{id:"training-nlp-models-for-sentiment-analysis-and-entity-detection"},"Training NLP Models for Sentiment Analysis and Entity Detection"),(0,a.kt)("p",null,"This week, we focused on training NLP models to improve our sentiment analysis and entity detection capabilities. We utilized the spaCy library to achieve this goal."),(0,a.kt)("h3",{id:"sentiment-analysis"},"Sentiment Analysis"),(0,a.kt)("p",null,"Using the pre-trained models provided by spaCy, we fine-tuned the models to better identify and categorize sentiments in news articles. This improvement will enable our platform to deliver more accurate sentiment analysis results for better user experience."),(0,a.kt)("h3",{id:"entity-detection"},"Entity Detection"),(0,a.kt)("p",null,"We also trained the models to recognize and extract entities from the news articles. This helps in understanding the context of the news and allows our platform to suggest similar content to the users based on the identified entities."),(0,a.kt)("h2",{id:"future-work"},"Future Work"),(0,a.kt)("p",null,"In the upcoming weeks, we plan to further enhance our platform by working on the following tasks:"),(0,a.kt)("h3",{id:"topic-identification"},"Topic Identification"),(0,a.kt)("p",null,"We will train our NLP models to identify and classify news articles based on their topics. This will help us in grouping news articles under relevant categories, making it easier for users to find the content that interests them the most."),(0,a.kt)("h3",{id:"elasticsearch-implementation"},"Elasticsearch Implementation"),(0,a.kt)("p",null,"We will be implementing Elasticsearch mechanics to ensure efficient indexing and searching of news articles. This will provide users with faster and more accurate search results, ultimately enhancing their experience on our platform."),(0,a.kt)("h3",{id:"ui-development-for-search-profile-and-individual-article-pages"},"UI Development for Search, Profile, and Individual Article Pages"),(0,a.kt)("p",null,"We will be designing and developing the user interface components for search, profile, and individual article pages. This will enable users to perform searches, manage their profiles, and view detailed information on individual articles, all within an intuitive and user-friendly interface."),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"This week's progress has laid the foundation for our news gatherer and sentiment analysis platform. With the homepage in place and powerful NLP models trained, we are now in a strong position to build upon these achievements and further refine our project. As we move forward, we will focus on implementing the features mentioned in the future work section, which will significantly improve the overall functionality and user experience of our platform. Stay tuned for more updates in the coming weeks!"))}p.isMDXComponent=!0}}]);