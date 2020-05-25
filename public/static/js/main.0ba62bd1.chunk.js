(this["webpackJsonpreact-auth-client"]=this["webpackJsonpreact-auth-client"]||[]).push([[0],{180:function(e,t,a){e.exports=a(352)},185:function(e,t,a){},202:function(e,t,a){},228:function(e,t,a){},229:function(e,t,a){},312:function(e,t,a){},342:function(e,t,a){},350:function(e,t,a){},351:function(e,t,a){},352:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(11),i=a.n(r),l=a(21),o=a(19),c=a(20),u=a(23),m=a(22),d=(a(185),a(17)),p=a(38),h=a.n(p),g=s.a.createContext(),b=g.Consumer,f=g.Provider;function E(e){return function(t){return s.a.createElement(b,null,(function(a){return s.a.createElement(e,Object.assign({},t,{business:a.business,isLoggedIn:a.isLoggedIn,isLoading:a.isLoading,login:a.login,signup:a.signup,logout:a.logout}))}))}}var v=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={business:null,isLoggedIn:!1,isLoading:!0},e.login=function(t,a){h.a.post("https://myhueco.herokuapp.com/auth/login",{email:t,password:a},{withCredentials:!0}).then((function(t){var a=t.data;e.setState({isLoggedIn:!0,isLoading:!1,business:a})})).catch((function(e){return console.log(e)}))},e.signup=function(t,a,n,s,r,i,l,o,c,u,m){console.log("signup",t,a,n,s,r,i,l,o,c,u,m),h.a.post("https://myhueco.herokuapp.com/auth/signup",{business_name:t,email:a,password:n,address:s,city:r,zip_code:i,service:l,phone_number:o,image_url:c,description:u,coordinates:m},{withCredentials:!0}).then((function(t){var a=t.data;e.setState({isLoggedIn:!0,isLoading:!1,business:a})})).catch((function(e){return console.log(e)}))},e.logout=function(){h.a.get("https://myhueco.herokuapp.com/auth/logout",{withCredentials:!0}).then((function(t){e.setState({isLoggedIn:!1,isLoading:!1,business:null})})).catch((function(e){return console.log(e)}))},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;h.a.get("https://myhueco.herokuapp.com/auth/me",{withCredentials:!0}).then((function(t){var a=t.data;e.setState({isLoggedIn:!0,isLoading:!1,business:a})})).catch((function(t){return e.setState({isLoggedIn:!1,isLoading:!1,business:null})}))}},{key:"render",value:function(){var e=this.state,t=e.business,a=e.isLoggedIn,n=e.isLoading,r=this.login,i=this.signup,l=this.logout;return s.a.createElement(f,{value:{business:t,isLoggedIn:a,isLoading:n,login:r,signup:i,logout:l}},this.props.children)}}]),a}(s.a.Component),y=(a(68),a(202),a(353)),k=a(355),I=y.a.Header,w=(y.a.Content,y.a.Footer,E(function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props,t=e.business,a=e.logout,n=e.isLoggedIn;return s.a.createElement(y.a,{className:"Layout"},n?s.a.createElement(I,{style:{position:"fixed",zIndex:1,width:"100%"}},s.a.createElement(k.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["2"]},s.a.createElement(k.a.Item,{key:"1"},s.a.createElement(l.b,{to:"/"},"Home")),s.a.createElement(k.a.Item,{key:"5"},t.email),s.a.createElement(k.a.Item,{key:"6"},s.a.createElement(l.b,{onClick:a},"Log out")))):s.a.createElement(I,{style:{position:"fixed",zIndex:1,width:"100%"}},s.a.createElement(k.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["2"]},s.a.createElement(k.a.Item,{key:"1"},s.a.createElement(l.b,{to:"/"},"Home")),s.a.createElement(k.a.Item,{key:"2"},s.a.createElement(l.b,{to:"/login"},"Business Log in")),s.a.createElement(k.a.Item,{key:"3"},s.a.createElement(l.b,{to:"/signup"},"Business Sign up")))))}}]),a}(n.Component))),C=a(80),O=new(function(){function e(){Object(o.a)(this,e),this.business=h.a.create({baseURL:"https://myhueco.herokuapp.com",withCredentials:!0})}return Object(c.a)(e,[{key:"getAllBusinesses",value:function(){return this.business.get("/businesses").then((function(e){return e.data}))}},{key:"getOneBusinessById",value:function(e){return this.business.get("/businesses/".concat(e)).then((function(e){return e.data}))}},{key:"getBusiness",value:function(){return this.business.get("/auth/myhueco").then((function(e){return e.data}))}},{key:"addAHueco",value:function(e,t){var a=t.timeSlot;return this.business.put("/businesses/".concat(e,"/add-hueco"),{timeSlot:a}).then((function(e){return e.data}))}},{key:"editHueco",value:function(e,t){return this.business.put("/businesses/".concat(e,"/edit/:myhuecoId"),t).then((function(e){return e.data}))}},{key:"deleteHueco",value:function(e,t){return this.business.delete("/businesses/".concat(e,"/delete/").concat(t)).then((function(e){return e.data}))}}]),e}()),j=(a(228),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={viewport:{width:"80vh",height:"80vh",latitude:41.3851,longitude:2.1734,zoom:10,selectedBusiness:null,setSelectedBusiness:null,selectedBusinessVisible:!1,pinVisible:!1},userLocation:{},businesses:[],selectedBusiness:null},e.setUserLocation=function(){navigator.geolocation.getCurrentPosition((function(t){var a={lat:t.coords.latitude,long:t.coords.longitude},n={height:"100vh",width:"100vw",latitude:t.coords.latitude,longitude:t.coords.longitude,zoom:10};e.setState({viewport:n,userLocation:a})}))},e.setSelectedBusiness=function(t){e.setState({selectedBusiness:t,selectedBusinessVisible:!0,pinVisible:!1})},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;O.getAllBusinesses().then((function(t){console.log("business",t),e.setState({businesses:t})})).catch((function(e){return console.log(e)}))}},{key:"componentDidUpdate",value:function(e){return e!==this.state}},{key:"render",value:function(){var e=this;console.log("this.state.selectedBusienss",this.state.selectedBusiness);var t=this.state.viewport,a=(t.latitude,t.longitude,t.width,t.height,t.zoom,this.state.businesses,this.state.selectedBusiness);return s.a.createElement("div",null,s.a.createElement("div",{class:"row"},s.a.createElement("div",{class:"col-5"},s.a.createElement(C.d,Object.assign({},this.state.viewport,{mapboxApiAccessToken:"pk.eyJ1IjoiZ3JhbngwMiIsImEiOiJjazlrOWUwb3YwbTlnM2huemFqajV3d3dsIn0.uL_eJIIsWA0CpS8-HOOFdA",mapStyle:"mapbox://styles/granx02/cka9kifn53jh71jo248opf5q4",onViewportChange:function(t){return e.setState({viewport:t})}}),s.a.createElement("div",null,s.a.createElement(C.a,{className:"GeolocateControl",positionOptions:{enableHighAccuracy:!0},trackUserLocation:!0,onViewportChange:function(t){return e.setState({viewport:t})}})),s.a.createElement(C.b,{className:"NavigationControl"}),a?s.a.createElement(C.c,{className:"popup",latitude:a.coordinates[1],longitude:a.coordinates[0],onClose:function(){e.setSelectedBusiness(null)}},s.a.createElement("div",null,s.a.createElement("h2",null,a.business_name),s.a.createElement("img",{src:a.image_url,alt:"img-business"}))):null))))}}]),a}(n.Component)),N=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={businesses:[],selectedBusiness:null},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;O.getAllBusinesses().then((function(t){console.log("business",t),e.setState({businesses:t})})).catch((function(e){return console.log(e)}))}},{key:"componentDidUpdate",value:function(e){return e!==this.state}},{key:"render",value:function(){var e=this.state.businesses;return s.a.createElement("div",null,e?e.map((function(e){return s.a.createElement("div",{class:"col-7"},s.a.createElement("div",{class:"card",style:{width:"18rem"}},s.a.createElement("h2",{class:"card-title"},e.business_name),s.a.createElement("img",{src:e.image_url,class:"card-img-top",alt:"img-business"}),s.a.createElement("p",{class:"card-text"},e.service)))})):null,s.a.createElement(l.b,{to:"/"},s.a.createElement("button",{className:""},"Go Back")))}}]),a}(n.Component);var L=function(){return s.a.createElement("div",null,s.a.createElement("h1",null,"Home Page"),s.a.createElement("div",{class:"row"},s.a.createElement("div",{class:"col-5"},s.a.createElement(j,null))),s.a.createElement("div",{class:"col-7"},s.a.createElement(N,null)))},_=a(178),S=a(354),x=a(356),B=a(125),P=(a(229),{labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:16}}}),F={wrapperCol:{xs:{span:24,offset:0},sm:{span:16,offset:8}}},A=E((function(e){var t=S.a.useForm(),a=Object(_.a)(t,1)[0];e.errorMessage;return s.a.createElement("div",{className:"form-ant"},s.a.createElement(S.a,Object.assign({},P,{form:a,name:"register",onFinish:function(t){console.log("Received values of form: ",t);var a=t.business_name,n=t.email,s=t.password,r=t.address,i=t.city,l=t.zip_code,o=t.service,c=t.phone_number,u=t.description;e.signup(a,n,s,r,i,l,o,c,u)},scrollToFirstError:!0}),s.a.createElement(S.a.Item,{name:"email",label:"E-mail",rules:[{type:"email",message:"The input is not valid E-mail!"},{required:!0,message:"Please input your E-mail!"}]},s.a.createElement(x.a,{className:"input"})),s.a.createElement(S.a.Item,{name:"password",label:"Password",rules:[{required:!0,message:"Please input your password!"}],hasFeedback:!0},s.a.createElement(x.a.Password,{className:"input"})),s.a.createElement(S.a.Item,{name:"business_name",label:"Business name",rules:[{required:!0,message:"Please input your business name",whitespace:!0}]},s.a.createElement(x.a,{className:"input"})),s.a.createElement(S.a.Item,{name:"address",label:"Business address",rules:[{required:!0,message:"Please select your business address!"}]},s.a.createElement(x.a,{className:"input"})),s.a.createElement(S.a.Item,{name:"zip_code",label:"Zip Code",rules:[{required:!0,message:"Please select your zip code!"}]},s.a.createElement(x.a,{className:"input"})),s.a.createElement(S.a.Item,{name:"city",label:"City",rules:[{required:!0,message:"Please select your city!"}]},s.a.createElement(x.a,{className:"input"})),s.a.createElement(S.a.Item,{name:"phone_number",label:"Phone Number",rules:[{required:!0,message:"Please input your phone number!"}]},s.a.createElement(x.a,{className:"input"})),s.a.createElement(S.a.Item,{name:"service",label:"What kind of service are you offering?",rules:[{required:!0}]},s.a.createElement(x.a,{className:"input"})),s.a.createElement(S.a.Item,{name:"description",label:"Description of your business"},s.a.createElement(x.a.TextArea,{className:"input"})),s.a.createElement(S.a.Item,F,s.a.createElement(B.a,{type:"primary",htmlType:"submit"},"Register"))),s.a.createElement("div",{className:"registered"},s.a.createElement("p",null,"Already have account?"),s.a.createElement(l.b,{to:"/login",className:"link"}," Login here")))})),q=a(359),H=(a(312),{labelCol:{span:8},wrapperCol:{span:16}}),z={wrapperCol:{offset:8,span:16}},V=E((function(e){return s.a.createElement("div",{className:"form-ant"},s.a.createElement(S.a,Object.assign({},H,{name:"basic",initialValues:{remember:!0},onFinish:function(t){console.log("Success:",t);var a=t.email,n=t.password;e.login(a,n)},onFinishFailed:function(e){console.log("Failed:",e)}}),s.a.createElement(S.a.Item,{label:"Email",name:"email",rules:[{type:"email",required:!0,message:"Please input your email!"}]},s.a.createElement(x.a,{className:"input"})),s.a.createElement(S.a.Item,{label:"Password",name:"password",rules:[{required:!0,message:"Please input your password!"}]},s.a.createElement(x.a.Password,{className:"input"})),s.a.createElement(S.a.Item,Object.assign({},z,{name:"remember",valuePropName:"checked"}),s.a.createElement(q.a,null,"Remember me")),s.a.createElement(S.a.Item,z,s.a.createElement(B.a,{type:"primary",htmlType:"submit"},"Submit"))))}));E(function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("h1",null,"Private Route"),this.props.isLoggedIn?s.a.createElement("h3",null,"Username: ",this.props.business.business_name):null)}}]),a}(n.Component));var T=E((function(e){console.log("props :>> ",e);var t=e.exact,a=e.path,n=e.component,r=e.isLoggedIn,i=n;return s.a.createElement(d.b,{exact:t,path:a,render:function(e){return r?s.a.createElement(d.a,{to:"/private"}):r?void 0:s.a.createElement(i,e)}})}));var U=E((function(e){console.log("props :>> ",e);var t=e.exact,a=e.path,n=e.component,r=e.isLoggedIn,i=n;return s.a.createElement(d.b,{exact:t,path:a,render:function(e){return r?s.a.createElement(i,e):r?void 0:s.a.createElement(d.a,{to:"/login"})}})})),D=(new(function(){function e(){Object(o.a)(this,e),this.booking=h.a.create({baseURL:"https://myhueco.herokuapp.com",withCredentials:!0})}return Object(c.a)(e,[{key:"bookingUserContactInfo",value:function(e){var t=e.first_name,a=e.last_name,n=e.email,s=e.businessId,r=e.timeslot;return this.booking.post("/booking/contact-info",{first_name:t,last_name:a,email:n,businessId:s,timeslot:r}).then((function(e){return e.data}))}},{key:"bookingUserPaymentInfo",value:function(e){return this.booking.put("/booking/:bookingId/payment-information",e).then((function(e){return e.data}))}},{key:"getBooking",value:function(e){return this.business.get("/booking/".concat(e)).then((function(e){return e.data}))}}]),e}()),a(358)),M=(a(342),{labelCol:{span:8},wrapperCol:{span:16}}),J={wrapperCol:{offset:8,span:16}},R=function(e){var t=D.a.Step;return s.a.createElement("div",{className:"contact"},s.a.createElement("div",{className:"step"},s.a.createElement(D.a,{current:0},s.a.createElement(t,{title:"Contact Information",description:"In progress"}),s.a.createElement(t,{title:"Secure your hueco",subTitle:"",description:"Next Step"}),s.a.createElement(t,{title:"Waiting",description:"Hueco confirmation"}))),s.a.createElement(S.a,Object.assign({},M,{name:"basic",initialValues:{remember:!0},onFinish:function(t){console.log("props",e);var a=t.first_name,n=t.last_name,s=t.email;e.booking(a,n,s)},onFinishFailed:function(e){console.log("Failed:",e)}}),s.a.createElement(S.a.Item,{label:"First name",name:"first_name",rules:[{required:!0,message:"Please input your first name!"}]},s.a.createElement(x.a,{className:"input"})),s.a.createElement(S.a.Item,{label:"Last name",name:"last_name",rules:[{required:!0,message:"Please input your last name!"}]},s.a.createElement(x.a,{className:"input"})),s.a.createElement(S.a.Item,{label:"Email",name:"email",rules:[{type:"email",required:!0,message:"Please input your email!"}]},s.a.createElement(x.a,{className:"input"})),s.a.createElement(S.a.Item,J,s.a.createElement(B.a,{type:"primary",htmlType:"submit"},"Submit"))))},W=a(95),Y=(a(350),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={cardholder_name:"",card_number:"",expiration_date:"",cv_code:""},e.handleFormSubmit=function(t){t.preventDefault();var a=e.state,n=a.cardholder_name,s=a.card_number,r=a.expiration_date,i=a.cv_code;e.props.payment(n,s,r,i)},e.handleChange=function(t){var a=t.target,n=a.name,s=a.value;e.setState(Object(W.a)({},n,s))},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.state,t=e.cardholder_name,a=e.card_number,n=e.expiration_date,r=e.cv_code,i=D.a.Step;return s.a.createElement("div",{className:"payment-info"},s.a.createElement("div",{className:"step"},s.a.createElement(D.a,{current:1},s.a.createElement(i,{title:"Contact Information",description:"Done"}),s.a.createElement(i,{title:"Secure your hueco",subTitle:"",description:"Payment Information"}),s.a.createElement(i,{title:"Waiting",description:"Hueco confirmation"}))),s.a.createElement("form",{className:"credit-card",onSubmit:this.handleFormSubmit},s.a.createElement("div",{className:"form-header"},s.a.createElement("h4",{className:"title"},"Credit card details")),s.a.createElement("div",{className:"form-body"},s.a.createElement("input",{type:"text",className:"card-number",placeholder:"Cardholder Name",value:t,onChange:this.handleChange}),s.a.createElement("input",{type:"text",className:"card-number",placeholder:"Card Number",value:a,onChange:this.handleChange}),s.a.createElement("div",{className:"date-field"},s.a.createElement("div",{className:"month"},s.a.createElement("input",{type:"text",className:"card-number",placeholder:"MM/YY",value:n,onChange:this.handleChange})),s.a.createElement("div",{className:"year"},s.a.createElement("input",{type:"text",className:"card-number",placeholder:"CVV",value:r,onChange:this.handleChange}))),s.a.createElement("button",{type:"submit",className:"proceed-btn"},"Proceed"))))}}]),a}(n.Component)),G=(a(351),a(66)),K=a(357),Z=E(function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={availability:[],isEmpty:!1},e.handleFormSubmit=function(t){t.preventDefault(),console.log("state",e.state);var a=e.state.availability;e.props.myHueco(a)},e.handleChange=function(t){var a=t.target,n=a.name,s=a.value;e.setState(Object(W.a)({},n,s))},e}return Object(c.a)(a,[{key:"render",value:function(){this.state.availability;return s.a.createElement("div",{className:"huecos"},s.a.createElement("h1",null,"My Huecos"),this.state.isEmpty?null:s.a.createElement("div",{className:"add-hueco"},s.a.createElement(G.a,null),s.a.createElement(B.a,{type:"primary",icon:s.a.createElement(K.a,null)},"Add a hueco")))}}]),a}(n.Component)),Q=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"container"},s.a.createElement(w,null),s.a.createElement(d.d,null,s.a.createElement(d.b,{exact:!0,path:"/",component:L}),s.a.createElement(T,{exact:!0,path:"/signup",component:A}),s.a.createElement(T,{exact:!0,path:"/login",component:V}),s.a.createElement(T,{exact:!0,path:"/booking/contact-info",component:R}),s.a.createElement(T,{exact:!0,path:"/booking/:bookingId/payment-information",component:Y}),s.a.createElement(U,{exact:!0,path:"/private",component:Z})))}}]),a}(n.Component);i.a.render(s.a.createElement(l.a,null,s.a.createElement(v,null,s.a.createElement(Q,null))),document.getElementById("root"))}},[[180,1,2]]]);
//# sourceMappingURL=main.0ba62bd1.chunk.js.map