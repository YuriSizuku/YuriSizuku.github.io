tyrano.plugin.kag.tag.loadjs={vital:["storage"],pm:{storage:""},start:function(pm){var that=this;$.getScript("./data/others/"+pm.storage,function(){that.kag.ftag.nextOrder()})}};
tyrano.plugin.kag.tag.movie={vital:["storage"],pm:{storage:"",volume:"",skip:"false",bgmode:"false",loop:"false"},start:function(pm){var that=this;if($.userenv()!="pc"){this.kag.layer.showEventLayer();if($.isTyranoPlayer())that.playVideo(pm);else{this.kag.layer.showEventLayer();that.playVideo(pm);$(".tyrano_base").unbind("click.movie")}}else{if($.getBrowser()=="firefox"||$.getBrowser()=="opera")pm.storage=$.replaceAll(pm.storage,".mp4",".webm");that.playVideo(pm)}},playVideo:function(pm){var that=
this;var url="./data/video/"+pm.storage;var video=document.createElement("video");video.id="bgmovie";video.src=url;if(pm.volume!="")video.volume=parseFloat(parseInt(pm.volume)/100);else if(typeof this.kag.config.defaultMovieVolume!="undefined")video.volume=parseFloat(parseInt(this.kag.config.defaultMovieVolume)/100);video.style.backgroundColor="black";video.style.position="absolute";video.style.top="0px";video.style.left="0px";video.style.width="100%";video.style.height="100%";video.style.display=
"none";video.autoplay=true;video.autobuffer=true;video.setAttribute("playsinline","1");if(pm.bgmode=="true"){that.kag.tmp.video_playing=true;video.style.zIndex=0;if(pm.loop=="true")video.loop=true;else video.loop=false;video.addEventListener("ended",function(e){if(that.kag.stat.video_stack==null){that.kag.tmp.video_playing=false;if(that.kag.stat.is_wait_bgmovie==true){that.kag.ftag.nextOrder();that.kag.stat.is_wait_bgmovie=false}}else{var video_pm=that.kag.stat.video_stack;var video2=document.createElement("video");
video2.style.backgroundColor="black";video2.style.position="absolute";video2.style.top="0px";video2.style.left="0px";video2.style.width="100%";video2.style.height="100%";video2.autoplay=true;video2.autobuffer=true;if(video_pm.loop=="true")video2.loop=true;else video2.loop=false;video2.setAttribute("playsinline","1");video2.src="./data/video/"+video_pm.storage;video2.load();var j_video2=$(video2);video2.play();j_video2.css("z-index",-1);$("#tyrano_base").append(j_video2);video2.addEventListener("canplay",
function(event){var arg=arguments.callee;j_video2.css("z-index",1);setTimeout(function(){$("#bgmovie").remove();video2.id="bgmovie"},100);that.kag.stat.video_stack=null;that.kag.tmp.video_playing=true;video2.removeEventListener("canplay",arg,false)},false);video2.addEventListener("ended",arguments.callee)}})}else{video.style.zIndex=199999;video.addEventListener("ended",function(e){$(".tyrano_base").find("video").remove();that.kag.ftag.nextOrder()});if(pm.skip=="true")$(video).on("click touchstart",
function(e){$(video).off("click touchstart");$(".tyrano_base").find("video").remove();that.kag.ftag.nextOrder()})}var j_video=$(video);j_video.css("opacity",0);$("#tyrano_base").append(j_video);j_video.animate({opacity:"1"},{duration:parseInt(pm.time),complete:function(){}});video.load();video.addEventListener("canplay",function(){video.style.display="";video.play()})}};
tyrano.plugin.kag.tag.bgmovie={vital:["storage"],pm:{storage:"",volume:"",loop:"true",time:"300",stop:"false"},start:function(pm){var that=this;pm.skip="false";pm.bgmode="true";this.kag.stat.current_bgmovie["storage"]=pm.storage;this.kag.stat.current_bgmovie["volume"]=pm.volume;if(this.kag.tmp.video_playing!=false){var video=document.getElementById("bgmovie");this.kag.stat.video_stack=pm;video.loop=false;that.kag.ftag.nextOrder();return}this.kag.ftag.startTag("movie",pm);if(pm.stop=="false")this.kag.ftag.nextOrder()}};
tyrano.plugin.kag.tag.wait_bgmovie={vital:[],pm:{stop:"false"},start:function(pm){var that=this;if(this.kag.tmp.video_playing==true){var video=document.getElementById("bgmovie");this.kag.stat.is_wait_bgmovie=true;video.loop=false}else this.kag.ftag.nextOrder()}};
tyrano.plugin.kag.tag.stop_bgmovie={vital:[],pm:{time:"300",wait:"true"},start:function(pm){var that=this;that.kag.tmp.video_playing=false;that.kag.stat.current_bgmovie["storage"]="";that.kag.stat.current_bgmovie["volume"]="";$(".tyrano_base").find("video").animate({opacity:"0"},{duration:parseInt(pm.time),complete:function(){$(this).remove();if(pm.wait=="true")that.kag.ftag.nextOrder()}});if(!$(".tyrano_base").find("video").get(0)){that.kag.ftag.nextOrder();return}if(pm.wait=="false")that.kag.ftag.nextOrder()}};
tyrano.plugin.kag.tag.showsave={pm:{},start:function(pm){var that=this;that.kag.stat.load_auto_next=true;this.kag.menu.displaySave(function(){that.kag.stat.load_auto_next=false;that.kag.ftag.nextOrder()})}};tyrano.plugin.kag.tag.showload={pm:{},start:function(pm){var that=this;this.kag.menu.displayLoad(function(){that.kag.ftag.nextOrder()})}};tyrano.plugin.kag.tag.showmenu={pm:{},start:function(pm){this.kag.menu.showMenu();this.kag.ftag.nextOrder()}};
tyrano.plugin.kag.tag.showmenubutton={pm:{},start:function(pm){$(".button_menu").show();this.kag.stat.visible_menu_button=true;this.kag.config.configVisible="true";this.kag.ftag.nextOrder()}};tyrano.plugin.kag.tag.hidemenubutton={pm:{},start:function(pm){$(".button_menu").hide();this.kag.stat.visible_menu_button=false;this.kag.config.configVisible="false";this.kag.ftag.nextOrder()}};
tyrano.plugin.kag.tag.skipstart={pm:{},start:function(pm){if(this.kag.stat.is_skip==true||this.kag.stat.is_adding_text)return false;this.kag.readyAudio();this.kag.stat.is_skip=true;this.kag.ftag.nextOrder()}};tyrano.plugin.kag.tag.skipstop={pm:{},start:function(pm){this.kag.stat.is_skip=false;this.kag.ftag.nextOrder()}};tyrano.plugin.kag.tag.autostart={pm:{},start:function(pm){if(this.kag.stat.is_auto==true)return false;this.kag.readyAudio();this.kag.stat.is_auto=true;this.kag.ftag.nextOrder()}};
tyrano.plugin.kag.tag.autostop={pm:{next:"true"},start:function(pm){this.kag.stat.is_auto=false;this.kag.stat.is_wait_auto=false;if(pm.next=="true")this.kag.ftag.nextOrder()}};
tyrano.plugin.kag.tag.autoconfig={pm:{speed:"",clickstop:""},start:function(pm){if(pm.speed!=""){this.kag.config.autoSpeed=pm.speed;this.kag.ftag.startTag("eval",{"exp":"sf._system_config_auto_speed = "+pm.speed,"next":"false"})}if(pm.clickstop!=""){this.kag.config.autoClickStop=pm.clickstop;this.kag.ftag.startTag("eval",{"exp":"sf._system_config_auto_click_stop = "+pm.clickstop,"next":"false"})}this.kag.ftag.nextOrder()}};
tyrano.plugin.kag.tag.anim={pm:{name:"",layer:"",left:"",top:"",width:"",height:"",opacity:"",color:"",time:"2000",effect:""},start:function(pm){var that=this;var anim_style={};if(pm.left!="")anim_style.left=pm.left;if(pm.top!="")anim_style.top=pm.top;if(pm.width!="")anim_style.width=pm.width;if(pm.height!="")anim_style.height=pm.height;if(pm.opacity!="")anim_style.opacity=$.convertOpacity(pm.opacity);if(pm.color!="")anim_style.color=$.convertColor(pm.color);var target="";if(pm.name!="")$("."+pm.name).each(function(){that.kag.pushAnimStack();
$(this).animate(anim_style,parseInt(pm.time),pm.effect,function(){that.kag.popAnimStack()})});else if(pm.layer!=""){var layer_name=pm.layer+"_fore";if(pm.layer=="free")layer_name="layer_free";var target_array=$("."+layer_name).children();target_array.each(function(){that.kag.pushAnimStack();$(this).animate(anim_style,parseInt(pm.time),pm.effect,function(){that.kag.popAnimStack()})})}this.kag.ftag.nextOrder()}};
tyrano.plugin.kag.tag.wa={start:function(pm){if(this.kag.tmp.num_anim>0){this.kag.stat.is_wait_anim=true;this.kag.layer.hideEventLayer()}else this.kag.ftag.nextOrder()}};tyrano.plugin.kag.tag.stopanim={vital:["name"],pm:{name:""},start:function(pm){$("."+pm.name).stop();this.kag.popAnimStack();this.kag.ftag.nextOrder()}};tyrano.plugin.kag.tag.keyframe={vital:["name"],pm:{name:""},start:function(pm){this.kag.stat.current_keyframe=pm.name;this.kag.ftag.nextOrder()}};
tyrano.plugin.kag.tag.endkeyframe={pm:{},start:function(pm){this.kag.stat.current_keyframe="";this.kag.ftag.nextOrder()}};
tyrano.plugin.kag.tag.frame={vital:["p"],pm:{p:""},master_trans:{"x":"","y":"","z":"","translate":"","translate3d":"","translateX":"","translateY":"","translateZ":"","scale":"","scale3d":"","scaleX":"","scaleY":"","scaleZ":"","rotate":"","rotate3d":"","rotateX":"","rotateY":"","rotateZ":"","skew":"","skewX":"","skewY":"","perspective":""},start:function(pm){var percentage=pm.p;delete pm.p;if(this.kag.stat.map_keyframe[this.kag.stat.current_keyframe]);else{this.kag.stat.map_keyframe[this.kag.stat.current_keyframe]=
{};this.kag.stat.map_keyframe[this.kag.stat.current_keyframe]["frames"]={};this.kag.stat.map_keyframe[this.kag.stat.current_keyframe]["styles"]={}}var map_trans={};var map_style={};for(key in pm)if(this.master_trans[key]=="")map_trans[key]=pm[key];else map_style[key]=pm[key];this.kag.stat.map_keyframe[this.kag.stat.current_keyframe]["frames"][percentage]={"trans":map_trans,"styles":map_style};this.kag.ftag.nextOrder()}};
tyrano.plugin.kag.tag.kanim={vital:["keyframe"],pm:{"name":"","layer":"","keyframe":""},start:function(pm){var that=this;var anim=this.kag.stat.map_keyframe[pm.keyframe];var class_name="."+pm.name;anim.config=pm;if(pm.time)pm.duration=parseInt(pm.time)+"ms";if(pm.delay)pm.delay=parseInt(pm.delay)+"ms";anim.complete=function(){that.kag.popAnimStack()};if(pm.name!=""){delete pm.name;delete pm.keyframe;$(class_name).each(function(){that.kag.pushAnimStack();$(this).a3d(anim)})}else if(pm.layer!=""){var layer_name=
pm.layer+"_fore";if(pm.layer=="free")layer_name="layer_free";delete pm.name;delete pm.keyframe;delete pm.layer;var target_array=$("."+layer_name).children();target_array.each(function(){that.kag.pushAnimStack();$(this).a3d(anim)})}this.kag.ftag.nextOrder()}};
tyrano.plugin.kag.tag.stop_kanim={pm:{"name":"","layer":""},start:function(pm){var that=this;if(pm.name!="")$("."+pm.name).css("-webkit-animation-name","");else if(pm.layer!=""){var layer_name=pm.layer+"_fore";if(pm.layer=="free")layer_name="layer_free";$("."+layer_name).children().css("-webkit-animation-name","")}this.kag.ftag.nextOrder()}};
tyrano.plugin.kag.tag.chara_ptext={pm:{name:"",face:""},start:function(pm){var that=this;this.kag.layer.hideEventLayer();if(pm.name==""){$("."+this.kag.stat.chara_ptext).html("");if(this.kag.stat.chara_talk_focus!="none")$("#tyrano_base").find(".tyrano_chara").css({"-webkit-filter":this.kag.stat.apply_filter_str,"-ms-filter":this.kag.stat.apply_filter_str,"-moz-filter":this.kag.stat.apply_filter_str})}else{if(this.kag.stat.jcharas[pm.name])pm.name=this.kag.stat.jcharas[pm.name];var cpm=this.kag.stat.charas[pm.name];
if(cpm){$("."+this.kag.stat.chara_ptext).html($.escapeHTML(cpm.jname));if(cpm.color!="")$("."+this.kag.stat.chara_ptext).css("color",$.convertColor(cpm.color));if(this.kag.stat.chara_talk_focus!="none"){$("#tyrano_base").find(".tyrano_chara").css({"-webkit-filter":this.kag.stat.apply_filter_str,"-ms-filter":this.kag.stat.apply_filter_str,"-moz-filter":this.kag.stat.apply_filter_str});$("#tyrano_base").find("."+pm.name+".tyrano_chara").css({"-webkit-filter":"brightness(100%) blur(0px)","-ms-filter":"brightness(100%) blur(0px)",
"-moz-filter":"brightness(100%) blur(0px)"})}if(this.kag.stat.chara_talk_anim!="none"){var chara_obj=$("#tyrano_base").find("."+pm.name+".tyrano_chara");if(chara_obj.get(0)){this.animChara(chara_obj,this.kag.stat.chara_talk_anim,pm.name);if(pm.face!="")this.kag.ftag.startTag("chara_mod",{name:pm.name,face:pm.face,time:"0"})}}}else{$("."+this.kag.stat.chara_ptext).html($.escapeHTML(pm.name));if(this.kag.stat.chara_talk_focus!="none")$("#tyrano_base").find(".tyrano_chara").css({"-webkit-filter":this.kag.stat.apply_filter_str,
"-ms-filter":this.kag.stat.apply_filter_str,"-moz-filter":this.kag.stat.apply_filter_str})}}if(this.kag.stat.vostart==true)if(this.kag.stat.map_vo["vochara"][pm.name]){var vochara=this.kag.stat.map_vo["vochara"][pm.name];var playsefile=$.replaceAll(vochara.vostorage,"{number}",vochara.number);var se_pm={loop:"false",storage:playsefile,stop:"true",buf:vochara.buf};this.kag.ftag.startTag("playse",se_pm);this.kag.stat.map_vo["vochara"][pm.name]["number"]=parseInt(vochara.number)+1}this.kag.stat.f_chara_ptext=
"true";if(pm.face!=""){if(!this.kag.stat.charas[pm.name]["map_face"][pm.face]){this.kag.error("\u6307\u5b9a\u3055\u308c\u305f\u30ad\u30e3\u30e9\u30af\u30bf\u30fc\u300c"+pm.name+"\u300d\u3082\u3057\u304f\u306fface:\u300c"+pm.face+"\u300d\u306f\u5b9a\u7fa9\u3055\u308c\u3066\u3044\u307e\u305b\u3093\u3002\u3082\u3046\u4e00\u5ea6\u78ba\u8a8d\u3092\u304a\u9858\u3044\u3057\u307e\u3059");return}var storage_url=this.kag.stat.charas[pm.name]["map_face"][pm.face];if(this.kag.stat.chara_talk_anim=="none")this.kag.ftag.startTag("chara_mod",
{name:pm.name,face:pm.face})}else{this.kag.layer.showEventLayer();this.kag.ftag.nextOrder()}},animChara:function(chara_obj,type,name){if(typeof this.kag.tmp.map_chara_talk_top[name]!="undefined")return;var that=this;var tmp_top=parseInt(chara_obj.get(0).offsetTop);chara_obj.css("top",tmp_top);var a_obj={};var b_obj={};this.kag.tmp.map_chara_talk_top[name]=true;var anim_time=this.kag.stat.chara_talk_anim_time;if(type=="up"){a_obj["top"]=tmp_top-this.kag.stat.chara_talk_anim_value;b_obj["top"]=tmp_top}else if(type==
"down"){a_obj["top"]=tmp_top+this.kag.stat.chara_talk_anim_value;b_obj["top"]=tmp_top}chara_obj.animate(a_obj,anim_time,"easeOutQuad",function(){chara_obj.animate(b_obj,anim_time,"easeOutQuad",function(){delete that.kag.tmp.map_chara_talk_top[name]})})}};
tyrano.plugin.kag.tag.chara_config={pm:{pos_mode:"",effect:"",ptext:"",time:"",memory:"",anim:"",pos_change_time:"",talk_focus:"",brightness_value:"",blur_value:"",talk_anim:"",talk_anim_time:"",talk_anim_value:""},start:function(pm){if(pm.pos_mode!="")this.kag.stat.chara_pos_mode=pm.pos_mode;if(pm.effect!="")this.kag.stat.chara_effect=pm.effect;if(pm.ptext!="")this.kag.stat.chara_ptext=pm.ptext;if(pm.time!="")this.kag.stat.chara_time=pm.time;if(pm.memory!="")this.kag.stat.chara_memory=pm.memory;
if(pm.anim!="")this.kag.stat.chara_anim=pm.anim;if(pm.pos_change_time!="")this.kag.stat.pos_change_time=pm.pos_change_time;if(pm.brightness_value!="")this.kag.stat.chara_brightness_value=pm.brightness_value;if(pm.blur_value!="")this.kag.stat.chara_blur_value=pm.blur_value;if(pm.talk_anim!="")this.kag.stat.chara_talk_anim=pm.talk_anim;if(pm.talk_anim_time!="")this.kag.stat.chara_talk_anim_time=parseInt(pm.talk_anim_time);if(pm.talk_anim_value!="")this.kag.stat.chara_talk_anim_value=parseInt(pm.talk_anim_value);
if(pm.talk_focus!=""){if(pm.talk_focus=="none")this.kag.stat.apply_filter_str="";else if(pm.talk_focus=="brightness")this.kag.stat.apply_filter_str="brightness("+this.kag.stat.chara_brightness_value+"%)";else if(pm.talk_focus=="blur")this.kag.stat.apply_filter_str="blur("+this.kag.stat.chara_blur_value+"px)";$("#tyrano_base").find(".tyrano_chara").css({"-webkit-filter":"brightness(100%) blur(0px)","-ms-filter":"brightness(100%) blur(0px)","-moz-filter":"brightness(100%) blur(0px)"});this.kag.stat.chara_talk_focus=
pm.talk_focus}this.kag.ftag.nextOrder()}};tyrano.plugin.kag.tag.chara_new={vital:["name","storage"],pm:{name:"",storage:"",width:"",height:"",reflect:"false",jname:"",visible:"false",color:"",map_face:{}},start:function(pm){var storage_url="./data/fgimage/"+pm.storage;if($.isHTTP(pm.storage))storage_url=pm.storage;pm.map_face["default"]=pm.storage;this.kag.preload(storage_url);if(pm.visible=="true");this.kag.stat.charas[pm.name]=pm;if(pm.jname!="")this.kag.stat.jcharas[pm.jname]=pm.name;this.kag.ftag.nextOrder()}};
tyrano.plugin.kag.tag.chara_show={vital:["name"],pm:{name:"",page:"fore",layer:"0",wait:"true",left:"0",top:"0",width:"",height:"",zindex:"1",reflect:"",face:"",storage:"",time:1E3},start:function(pm){var that=this;var cpm=this.kag.stat.charas[pm.name];var array_storage=[];if(cpm==null){this.kag.error("\u6307\u5b9a\u3055\u308c\u305f\u30ad\u30e3\u30e9\u30af\u30bf\u30fc\u300c"+pm.name+"\u300d\u306f\u5b9a\u7fa9\u3055\u308c\u3066\u3044\u307e\u305b\u3093\u3002[chara_new]\u3067\u5b9a\u7fa9\u3057\u3066\u304f\u3060\u3055\u3044");
return}var check_obj=$(".layer_fore").find("."+pm.name);if(check_obj.get(0)){that.kag.ftag.nextOrder();return}var storage_url="./data/fgimage/"+cpm.storage;if($.isHTTP(cpm.storage))storage_url=cpm.storage;if(pm.face!=""){if(!cpm["map_face"][pm.face]){this.kag.error("\u6307\u5b9a\u3055\u308c\u305f\u30ad\u30e3\u30e9\u30af\u30bf\u30fc\u300c"+pm.name+"\u300d\u3082\u3057\u304f\u306fface:\u300c"+pm.face+"\u300d\u306f\u5b9a\u7fa9\u3055\u308c\u3066\u3044\u307e\u305b\u3093\u3002\u3082\u3046\u4e00\u5ea6\u78ba\u8a8d\u3092\u304a\u9858\u3044\u3057\u307e\u3059");
return}storage_url="./data/fgimage/"+cpm["map_face"][pm.face]}else if(pm.storage!=""){if($.isHTTP(pm.storage)){folder="";storage_url=pm.storage}else storage_url="./data/fgimage/"+pm.storage;that.kag.stat.charas[pm.name]["storage"]=pm.storage}var j_chara_root=$("<div></div>");j_chara_root.css({"position":"absolute","display":"none"});var img_obj=$("<img />");img_obj.attr("src",storage_url);img_obj.addClass("chara_img");j_chara_root.append(img_obj);if(pm.width!=""){var width=parseInt(pm.width);cpm.width=
width}if(pm.height!=""){var height=parseInt(pm.height);cpm.height=height}if(cpm.width!="")j_chara_root.css("width",cpm.width+"px");if(cpm.height!="")j_chara_root.css("height",cpm.height+"px");if(pm.zindex!=""){var zindex=parseInt(pm.zindex);j_chara_root.css("z-index",zindex)}var chara_layer={};if(cpm["_layer"])chara_layer=cpm["_layer"];for(key in chara_layer){var chara_part=chara_layer[key];var current_part_id=chara_part["current_part_id"];var chara_obj=chara_part[current_part_id];if(current_part_id==
"allow_storage")chara_obj={storage:chara_part["allow_storage"],visible:"true"};if(true){var part_storage="./data/fgimage/"+chara_obj["storage"];var j_img=$("<img />");if(chara_obj["storage"]=="none")part_storage="./tyrano/images/system/transparent.png";else array_storage.push(part_storage);j_img.attr("src",part_storage);j_img.css({position:"absolute",left:0,top:0,width:"100%",height:"100%","z-index":chara_part.zindex});j_img.addClass("part");j_img.addClass(key);j_chara_root.append(j_img)}}if(pm.reflect!=
"")if(pm.reflect=="true")cpm.reflect="true";else cpm.reflect="false";array_storage.push(storage_url);this.kag.preloadAll(array_storage,function(){var target_layer=that.kag.layer.getLayer(pm.layer,pm.page);target_layer.append(j_chara_root).show();var chara_num=1;that.kag.layer.hideEventLayer();if(that.kag.stat.chara_pos_mode=="true"&&pm.left=="0"){if(pm.top!="0")j_chara_root.css("top",parseInt(pm.top));else j_chara_root.css("bottom",0);var chara_cnt=target_layer.find(".tyrano_chara").length;var sc_width=
parseInt(that.kag.config.scWidth);var sc_height=parseInt(that.kag.config.scHeight);var center=Math.floor(parseInt(j_chara_root.css("width"))/2);var base=Math.floor(sc_width/(chara_cnt+2));var tmp_base=base;var first_left=base-center;j_chara_root.css("left",first_left+"px");var array_tyrano_chara=target_layer.find(".tyrano_chara").get().reverse();$(array_tyrano_chara).each(function(){chara_num++;tmp_base+=base;var j_chara=$(this);center=Math.floor(parseInt(j_chara.css("width"))/2);var left=tmp_base-
center;if(that.kag.stat.chara_anim=="false")j_chara.fadeTo(parseInt(that.kag.cutTimeWithSkip(pm.time)),0,function(){j_chara.css("left",left);j_chara.fadeTo(parseInt(that.kag.cutTimeWithSkip(that.kag.stat.pos_change_time)),1,function(){chara_num--;if(chara_num==0){that.kag.layer.showEventLayer();if(pm.wait=="true")that.kag.ftag.nextOrder()}})});else j_chara.animate({left:left},parseInt(that.kag.cutTimeWithSkip(that.kag.stat.pos_change_time)),that.kag.stat.chara_effect,function(){chara_num--;if(chara_num==
0){that.kag.layer.showEventLayer();if(pm.wait=="true")that.kag.ftag.nextOrder()}})})}else{j_chara_root.css("top",pm.top+"px");j_chara_root.css("left",pm.left+"px")}setTimeout(function(){var width=img_obj.css("width");var height=img_obj.css("height");j_chara_root.css("width",width);j_chara_root.css("height",height);j_chara_root.find(".part").css("width",width);j_chara_root.find(".part").css("height",height)},1);$.setName(j_chara_root,cpm.name);j_chara_root.addClass("tyrano_chara");if(cpm.width!="")img_obj.css("width",
cpm.width+"px");if(cpm.height!="")img_obj.css("height",cpm.height+"px");if(cpm.reflect=="true")j_chara_root.addClass("reflect");else j_chara_root.removeClass("reflect");if(pm.wait!="true")that.kag.ftag.nextOrder();j_chara_root.animate({opacity:"show"},{duration:parseInt(that.kag.cutTimeWithSkip(pm.time)),easing:that.kag.stat.chara_effect,complete:function(){chara_num--;if(chara_num==0){that.kag.layer.showEventLayer();if(pm.wait=="true")that.kag.ftag.nextOrder()}}})})}};
tyrano.plugin.kag.tag.chara_hide={vital:["name"],pm:{page:"fore",layer:"0",name:"",wait:"true",pos_mode:"true",time:"1000"},start:function(pm){var that=this;var target_layer=this.kag.layer.getLayer(pm.layer,pm.page);var img_obj=target_layer.find("."+pm.name);if(!img_obj.get(0)){that.kag.ftag.nextOrder();return}var chara_num=0;that.kag.layer.hideEventLayer();img_obj.animate({opacity:"hide"},{duration:parseInt(that.kag.cutTimeWithSkip(pm.time)),easing:"linear",complete:function(){img_obj.remove();if(that.kag.stat.chara_pos_mode==
"true"&&pm.pos_mode=="true"){var chara_cnt=target_layer.find(".tyrano_chara").length;var sc_width=parseInt(that.kag.config.scWidth);var sc_height=parseInt(that.kag.config.scHeight);var base=Math.floor(sc_width/(chara_cnt+1));var tmp_base=0;if(chara_cnt==0){that.kag.layer.showEventLayer();if(pm.wait=="true")that.kag.ftag.nextOrder();return}var array_tyrano_chara=target_layer.find(".tyrano_chara").get().reverse();$(array_tyrano_chara).each(function(){chara_num++;tmp_base+=base;var j_chara=$(this);var center=
Math.floor(parseInt(j_chara.css("width"))/2);var left=tmp_base-center;if(that.kag.stat.chara_anim=="false")j_chara.fadeTo(parseInt(that.kag.cutTimeWithSkip(pm.time)),0,function(){j_chara.css("left",left);j_chara.fadeTo(parseInt(that.kag.cutTimeWithSkip(that.kag.stat.pos_change_time)),1,function(){chara_num--;if(chara_num==0){that.kag.layer.showEventLayer();if(pm.wait=="true")that.kag.ftag.nextOrder()}})});else j_chara.animate({left:left},parseInt(that.kag.cutTimeWithSkip(that.kag.stat.pos_change_time)),
that.kag.stat.chara_effect,function(){chara_num--;if(chara_num==0){that.kag.layer.showEventLayer();if(pm.wait=="true")that.kag.ftag.nextOrder()}})})}else if(pm.wait=="true"){that.kag.layer.showEventLayer();that.kag.ftag.nextOrder()}}});if(this.kag.stat.chara_memory=="false")this.kag.stat.charas[pm.name].storage=this.kag.stat.charas[pm.name]["map_face"]["default"];if(pm.wait!="true")this.kag.ftag.nextOrder()}};
tyrano.plugin.kag.tag.chara_hide_all={vital:[],pm:{page:"fore",layer:"0",wait:"true",time:"1000"},start:function(pm){var that=this;var target_layer=this.kag.layer.getLayer(pm.layer,pm.page);var img_obj=target_layer.find(".tyrano_chara");var chara_num=0;that.kag.layer.hideEventLayer();var flag_complete=false;if(!img_obj.get(0)){that.kag.ftag.nextOrder();return}img_obj.animate({opacity:"hide"},{duration:parseInt(that.kag.cutTimeWithSkip(pm.time)),easing:"linear",complete:function(){img_obj.remove();
if(pm.wait=="true")if(flag_complete==false){flag_complete=true;that.kag.layer.showEventLayer();that.kag.ftag.nextOrder()}}});if(this.kag.stat.chara_memory=="false")for(key in this.kag.stat.charas)this.kag.stat.charas[key].storage=this.kag.stat.charas[key]["map_face"]["default"];if(pm.wait!="true"){this.kag.layer.showEventLayer();this.kag.ftag.nextOrder()}}};tyrano.plugin.kag.tag.chara_delete={vital:["name"],pm:{name:""},start:function(pm){delete this.kag.stat.charas[pm.name];this.kag.ftag.nextOrder()}};
tyrano.plugin.kag.tag.chara_mod={vital:["name"],pm:{name:"",face:"",reflect:"",storage:"",time:"",cross:"true",wait:"true"},start:function(pm){var that=this;that.kag.layer.hideEventLayer();var storage_url="";var folder="./data/fgimage/";if(pm.face!=""){if(!this.kag.stat.charas[pm.name]["map_face"][pm.face]){this.kag.error("\u6307\u5b9a\u3055\u308c\u305f\u30ad\u30e3\u30e9\u30af\u30bf\u30fc\u300c"+pm.name+"\u300d\u3082\u3057\u304f\u306fface:\u300c"+pm.face+"\u300d\u306f\u5b9a\u7fa9\u3055\u308c\u3066\u3044\u307e\u305b\u3093\u3002\u3082\u3046\u4e00\u5ea6\u78ba\u8a8d\u3092\u304a\u9858\u3044\u3057\u307e\u3059");
return}storage_url=this.kag.stat.charas[pm.name]["map_face"][pm.face]}else if($.isHTTP(pm.storage)){folder="";storage_url=pm.storage}else storage_url=pm.storage;if($(".layer_fore").find("."+pm.name).size()==0){this.kag.stat.charas[pm.name]["storage"]=storage_url;this.kag.stat.charas[pm.name]["reflect"]=pm.reflect;this.kag.layer.showEventLayer();this.kag.ftag.nextOrder();return}var chara_time=this.kag.stat.chara_time;if(pm.time!="")chara_time=pm.time;if($(".layer_fore").find("."+pm.name).find(".chara_img").attr("src")==
folder+storage_url)chara_time="0";if(pm.reflect!=""){if(pm.reflect=="true")$(".layer_fore").find("."+pm.name).addClass("reflect");else $(".layer_fore").find("."+pm.name).removeClass("reflect");this.kag.stat.charas[pm.name]["reflect"]=pm.reflect}if(storage_url==""){that.kag.layer.showEventLayer();this.kag.ftag.nextOrder();return}this.kag.preload(folder+storage_url,function(){if($(".chara-mod-animation").get(0))$(".chara-mod-animation_"+pm.name).remove();if(chara_time!="0"){var j_new_img=$(".layer_fore").find("."+
pm.name).clone();j_new_img.find(".chara_img").attr("src",folder+storage_url);j_new_img.css("opacity",0);var j_img=$(".layer_fore").find("."+pm.name);j_img.addClass("chara-mod-animation_"+pm.name);j_img.after(j_new_img);if(pm.cross=="true")j_img.fadeTo(parseInt(that.kag.cutTimeWithSkip(chara_time)),0,function(){});j_new_img.fadeTo(parseInt(that.kag.cutTimeWithSkip(chara_time)),1,function(){if(pm.cross=="false")j_img.fadeTo(parseInt(that.kag.cutTimeWithSkip(chara_time)),0,function(){j_img.remove();
if(pm.wait=="true"){that.kag.layer.showEventLayer();that.kag.ftag.nextOrder()}});else{j_img.remove();if(pm.wait=="true"){that.kag.layer.showEventLayer();that.kag.ftag.nextOrder()}}})}else{$(".layer_fore").find("."+pm.name).find(".chara_img").attr("src",folder+storage_url);if(pm.wait=="true"){that.kag.layer.showEventLayer();that.kag.ftag.nextOrder()}}that.kag.stat.charas[pm.name]["storage"]=storage_url;if(pm.wait=="false"){that.kag.layer.showEventLayer();that.kag.ftag.nextOrder()}})}};
tyrano.plugin.kag.tag.chara_move={vital:["name"],pm:{name:"",time:"600",anim:"false",left:"",top:"",width:"",height:"",effect:"",wait:"true"},start:function(pm){var that=this;var target_obj=$(".layer_fore").find("."+pm.name+".tyrano_chara");var target_img=$(".layer_fore").find("."+pm.name+".tyrano_chara").find("img");if(!target_obj.get(0)){that.kag.ftag.nextOrder();return}var anim_style={};var img_anim_style={};if(pm.left!="")anim_style.left=pm.left+"px";if(pm.top!="")anim_style.top=pm.top+"px";if(pm.width!=
""){anim_style.width=pm.width;img_anim_style.width=pm.width}if(pm.height!=""){anim_style.height=pm.height;img_anim_style.height=pm.height}var target="";if(pm.name!="")if(pm.anim=="true"){target_obj.animate(anim_style,parseInt(pm.time),pm.effect,function(){if(pm.wait=="true")that.kag.ftag.nextOrder()});target_img.animate(img_anim_style,parseInt(pm.time),pm.effect,function(){})}else target_obj.fadeTo(parseInt(that.kag.cutTimeWithSkip(pm.time))/2,0,function(){target_obj.css(anim_style);target_img.css(img_anim_style);
target_obj.fadeTo(parseInt(that.kag.cutTimeWithSkip(pm.time))/2,1,function(){if(pm.wait=="true")that.kag.ftag.nextOrder()})});if(pm.wait=="false")this.kag.ftag.nextOrder()}};tyrano.plugin.kag.tag.chara_face={vital:["name","face","storage"],pm:{name:"",face:"",storage:""},start:function(pm){var storage_url="";if($.isHTTP(pm.storage))storage_url=pm.storage;else storage_url=pm.storage;this.kag.stat.charas[pm.name]["map_face"][pm.face]=storage_url;this.kag.ftag.nextOrder()}};
tyrano.plugin.kag.tag.chara_layer={vital:["name","part","id","storage"],pm:{name:"",part:"",id:"",storage:"",zindex:""},start:function(pm){var cpm=this.kag.stat.charas[pm.name];if(cpm==null){this.kag.error("\u6307\u5b9a\u3055\u308c\u305f\u30ad\u30e3\u30e9\u30af\u30bf\u30fc\u300c"+pm.name+"\u300d\u306f\u5b9a\u7fa9\u3055\u308c\u3066\u3044\u307e\u305b\u3093\u3002[chara_new]\u3067\u5b9a\u7fa9\u3057\u3066\u304f\u3060\u3055\u3044");return}var chara_layer={};if(cpm["_layer"])chara_layer=cpm["_layer"];else cpm["_layer"]=
{};var chara_part={};var init_part=false;if(chara_layer[pm.part])chara_part=chara_layer[pm.part];else{init_part=true;cpm["_layer"][pm.part]={"default_part_id":pm.id,"current_part_id":pm.id,"zindex":pm.zindex}}var chara_obj={};if(chara_part[pm.id])chara_obj=chara_part[pm.id];else{chara_obj={storage:"",zindex:""};if(init_part==true)chara_obj["visible"]="true";else chara_obj["visible"]="false"}cpm["_layer"][pm.part][pm.id]=$.extendParam(pm,chara_obj);this.kag.ftag.nextOrder()}};
tyrano.plugin.kag.tag.chara_layer_mod={vital:["name","part"],pm:{name:"",part:"",zindex:""},start:function(pm){var that=this;var cpm=this.kag.stat.charas[pm.name];if(cpm==null){this.kag.error("\u6307\u5b9a\u3055\u308c\u305f\u30ad\u30e3\u30e9\u30af\u30bf\u30fc\u300c"+pm.name+"\u300d\u306f\u5b9a\u7fa9\u3055\u308c\u3066\u3044\u307e\u305b\u3093\u3002[chara_new]\u3067\u5b9a\u7fa9\u3057\u3066\u304f\u3060\u3055\u3044");return}if(!cpm["_layer"]){this.kag.error("\u6307\u5b9a\u3055\u308c\u305f\u30ad\u30e3\u30e9\u30af\u30bf\u30fc\u300c"+
pm.name+"\u300d\u306e\u5dee\u5206\u30d1\u30fc\u30c4\u306f\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u307e\u305b\u3093\u3002[chara_layer]\u3067\u5b9a\u7fa9\u3057\u3066\u304f\u3060\u3055\u3044");return}if(cpm["_layer"][pm.part])cpm["_layer"][pm.part]["zindex"]=pm.zindex;this.kag.ftag.nextOrder()}};
tyrano.plugin.kag.tag.chara_part={vital:["name"],pm:{name:"",allow_storage:"false",time:"",wait:"true"},start:function(pm){var that=this;var cpm=this.kag.stat.charas[pm.name];if(cpm==null){this.kag.error("\u6307\u5b9a\u3055\u308c\u305f\u30ad\u30e3\u30e9\u30af\u30bf\u30fc\u300c"+pm.name+"\u300d\u306f\u5b9a\u7fa9\u3055\u308c\u3066\u3044\u307e\u305b\u3093\u3002[chara_new]\u3067\u5b9a\u7fa9\u3057\u3066\u304f\u3060\u3055\u3044");return}if(!cpm["_layer"]){this.kag.error("\u6307\u5b9a\u3055\u308c\u305f\u30ad\u30e3\u30e9\u30af\u30bf\u30fc\u300c"+
pm.name+"\u300d\u306e\u5dee\u5206\u30d1\u30fc\u30c4\u306f\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u307e\u305b\u3093\u3002[chara_layer]\u3067\u5b9a\u7fa9\u3057\u3066\u304f\u3060\u3055\u3044");return}var chara_part=cpm["_layer"];var map_part={};var array_storage=[];var part_num=0;for(key in pm)if(chara_part[key]){var part_id=pm[key];if(chara_part[key][part_id]){var part=chara_part[key][part_id];part.id=part_id;map_part[key]=part;if(part["storage"]!="none")array_storage.push("./data/fgimage/"+part["storage"]);
this.kag.stat.charas[pm.name]["_layer"][key]["current_part_id"]=part_id}else if(pm.allow_storage=="true"){map_part[key]={"storage":part_id,"id":part_id};array_storage.push("./data/fgimage/"+part_id);this.kag.stat.charas[pm.name]["_layer"][key]["current_part_id"]="allow_storage";this.kag.stat.charas[pm.name]["_layer"][key]["allow_storage"]=part_id}}var target_obj=$(".layer_fore").find("."+pm.name+".tyrano_chara");this.kag.preloadAll(array_storage,function(){if(pm.time!=""){var n=0;var cnt=0;console.log(map_part);
for(key in map_part){cnt++;var part=map_part[key];var j_img=target_obj.find(".part"+"."+key+"");var j_new_img=j_img.clone();j_new_img.css("opacity",0);if(part.storage!="none")j_new_img.attr("src","./data/fgimage/"+part.storage);else j_new_img.attr("src","./tyrano/images/system/transparent.png");if(pm[key+"_zindex"])j_new_img.css("z-index",pm[key+"_zindex"]);else j_new_img.css("z-index",chara_part[key]["zindex"]);j_img.after(j_new_img);j_img.fadeTo(parseInt(pm.time),0,function(){j_img.remove()});j_new_img.fadeTo(parseInt(pm.time),
1,function(){n++;if(pm.wait=="true")if(cnt==n)that.kag.ftag.nextOrder()})}if(pm.wait=="false")that.kag.ftag.nextOrder()}else{for(key in map_part){var part=map_part[key];var j_img=target_obj.find(".part"+"."+key+"");if(part.storage!="none")j_img.attr("src","./data/fgimage/"+part.storage);else j_img.attr("src","./tyrano/images/system/transparent.png");if(pm[key+"_zindex"])j_img.css("z-index",pm[key+"_zindex"]);else j_img.css("z-index",chara_part[key]["zindex"])}that.kag.ftag.nextOrder()}})}};
tyrano.plugin.kag.tag.chara_part_reset={vital:["name"],pm:{name:"",part:""},start:function(pm){var that=this;var cpm=this.kag.stat.charas[pm.name];if(cpm==null){this.kag.error("\u6307\u5b9a\u3055\u308c\u305f\u30ad\u30e3\u30e9\u30af\u30bf\u30fc\u300c"+pm.name+"\u300d\u306f\u5b9a\u7fa9\u3055\u308c\u3066\u3044\u307e\u305b\u3093\u3002[chara_new]\u3067\u5b9a\u7fa9\u3057\u3066\u304f\u3060\u3055\u3044");return}if(!cpm["_layer"]){this.kag.error("\u6307\u5b9a\u3055\u308c\u305f\u30ad\u30e3\u30e9\u30af\u30bf\u30fc\u300c"+
pm.name+"\u300d\u306e\u5dee\u5206\u30d1\u30fc\u30c4\u306f\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u307e\u305b\u3093\u3002[chara_layer]\u3067\u5b9a\u7fa9\u3057\u3066\u304f\u3060\u3055\u3044");return}var chara_part=cpm["_layer"];var new_pm={"name":pm.name};if(pm.part=="")for(key in chara_part)new_pm[key]=chara_part[key]["default_part_id"];else{var array_part=pm.part.split(",");for(var i=0;i<array_part.length;i++){var key=array_part[i];if(chara_part[key])new_pm[key]=chara_part[key]["default_part_id"]}}this.kag.ftag.startTag("chara_part",
new_pm)}};tyrano.plugin.kag.tag.showlog={pm:{},start:function(pm){this.kag.menu.displayLog();this.kag.ftag.nextOrder()}};
tyrano.plugin.kag.tag.filter={vital:[],pm:{layer:"all",page:"fore",name:"",grayscale:"",sepia:"",saturate:"",hue:"",invert:"",opacity:"",brightness:"",contrast:"",blur:""},start:function(pm){var filter_str="";var j_obj={};if(pm.layer=="all")j_obj=$(".layer_camera");else j_obj=this.kag.layer.getLayer(pm.layer,pm.page);if(pm.name!="")j_obj=j_obj.find("."+pm.name);if(pm.grayscale!="")filter_str+="grayscale("+pm.grayscale+"%) ";if(pm.sepia!="")filter_str+="sepia("+pm.sepia+"%) ";if(pm.saturate!="")filter_str+=
"saturate("+pm.saturate+"%) ";if(pm.hue!="")filter_str+="hue-rotate("+pm.hue+"deg) ";if(pm.invert!="")filter_str+="invert("+pm.invert+"%) ";if(pm.opacity!="")filter_str+="opacity("+pm.opacity+"%) ";if(pm.brightness!="")filter_str+="brightness("+pm.brightness+"%) ";if(pm.contrast!="")filter_str+="contrast("+pm.contrast+"%) ";if(pm.blur!="")filter_str+="blur("+pm.blur+"px) ";j_obj.css({"-webkit-filter":filter_str,"-ms-filter":filter_str,"-moz-filter":filter_str});j_obj.addClass("tyrano_filter_effect");
this.kag.ftag.nextOrder()}};tyrano.plugin.kag.tag.free_filter={vital:[],pm:{layer:"",page:"fore",name:""},start:function(pm){var filter_str="";var j_obj;if(pm.layer=="")j_obj=$(".tyrano_filter_effect");else j_obj=this.kag.layer.getLayer(pm.layer,pm.page);if(pm.name!="")j_obj=j_obj.find("."+pm.name);j_obj.css({"-webkit-filter":"","-ms-filter":"","-moz-filter":""});j_obj.removeClass("tyrano_filter_effect");this.kag.ftag.nextOrder()}};
tyrano.plugin.kag.tag.web={vital:["url"],pm:{url:""},start:function(pm){if(pm.url.indexOf("http")==-1)this.kag.log("error:[web] url is not correct "+pm.url);else if($.isNWJS()){var gui=require("nw.gui");gui.Shell.openExternal(pm.url)}else if($.isTyranoPlayer())$.openWebFromApp(pm.url);else window.open(pm.url);this.kag.ftag.nextOrder()}};
