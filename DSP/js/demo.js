window.onload=function(){
	$(".head").load("section_contact.html .section_head",quot);
	$(".foot").load("section_contact.html .section_foot");
	function quot(){
		$(function(){
	  		function show(){
	   			var mydate = new Date();
	  			var str = "" + mydate.getFullYear() + " 年 ";
	   			str += (mydate.getMonth()+1) + " 月 ";
	   			str += mydate.getDate() + " 日";
	   			return str;
	  		}
			$(".section_head_content_time").html(show());
		})
		$(window).scroll(function(){
		    if($(window).scrollTop()>685){
		        $('.section_head_content_foot').css({
		            position:'fixed',
		            left:'0',
		            top:'0',
		            zIndex:'2',
		            background:'gray',
		            height:'67px'
		        })
		        $('.section_head_content_foot_bj').css({
		            position:'fixed',
		            left:'0',
		            top:'0'
		        })
		    }
		    else{
		        $('.section_head_content_foot').css({
		            position:'absolute',
		            left:'0',
		            bottom:'0',
		            top:'',
		            background:''
		        })
		        $('.section_head_content_foot_bj').css({
		            position:'absolute',
		            bottom:'0',
		            left:'0',
		            top:'',
		            opacity:'0.2'
		        })
		    }
		})
		$('.section_head_content_foot_bt a').mouseover(function(){	
			$(this).css('color','yellow')
		})
		$('.section_head_content_foot_bt a').mouseout(function(){
			$(this).css('color','black')
		})
	}
	//THIRD
	var Third_timer=Third_timer2=null;
	var flag_Thr=true;
	$(window).scroll(function(){
		if ($(window).scrollTop()>=430&&$(window).scrollTop()<=800) {
			$(".section_mobileAD_describe_pic .pic-pc").css("display","block");
			$(".section_mobileAD_describe_pic .pic3").fadeIn("normal");
			var Third_pic4=[	
				function(){
					$(".section_mobileAD_describe_pic .pic4-3").show("fast",_Third_pic4_fn);
				},
				function(){
					$(".section_mobileAD_describe_pic .pic4-2").show("fast",_Third_pic4_fn);
				},
				function(){
					$(".section_mobileAD_describe_pic .pic4-1").show("fast");	
				}
			]
			$(".section_mobileAD_describe").queue("Third_pic4",Third_pic4);
			function _Third_pic4_fn(){
				$(".section_mobileAD_describe").dequeue("Third_pic4")
			}
			_Third_pic4_fn();
			var Third_pic5=[	
				function(){
					$(".section_mobileAD_describe_pic .pic5-2").show("fast",_Third_pic5_fn);
				},
				function(){
					$(".section_mobileAD_describe_pic .pic5-1").show("fast")	
				}
			]
			$(".section_mobileAD_describe").queue("Third_pic5",Third_pic5);
			function _Third_pic5_fn(){
				$(".section_mobileAD_describe").dequeue("Third_pic5")
			}
			_Third_pic5_fn();
			var Third_pic6=[
				function(){
					$(".section_mobileAD_describe_pic .pic6-3").show("fast",_Third_pic6_fn)
				},
				function(){
					$(".section_mobileAD_describe_pic .pic6-2").show("fast",_Third_pic6_fn)
				},
				function(){
					$(".section_mobileAD_describe_pic .pic6-1").show("fast")
				}
			]
			$(".section_mobileAD_describe").queue("Third_pic6",Third_pic6);
			function _Third_pic6_fn(){
				$(".section_mobileAD_describe").dequeue("Third_pic6")
			}
			_Third_pic6_fn();
		}
		if ($(window).scrollTop()>=1138||$(window).scrollTop()<=200) {
			$(".section_mobileAD_describe_pic .pic1").siblings().hide()
		}
	})
	//section_mobileAD_APPdomestic国内资源	
	$(".section_mobileAD_APPdomestic_APP li").hover(function(){	
		var _this=this;
		Third_timer = setInterval(function(){
			$(_this).stop().animate({
				left:"2px",
				top:"4px",
				right:"2px"
			},100,function(){
				$(_this).css({
					left:"inherit",
					top:"inherit"
				})
			})
		},120)
	},function(){
		clearInterval(Third_timer)
		$(this).css({
			left:"0px",
			top:"0px"
		},17)
	});
	$(window).scroll(function(){
		//section_mobileAD_APPoverseas国外资源
		if ($(window).scrollTop()>=1430&&$(window).scrollTop()<=1880) {
			if(flag_Thr){
				flag_Thr=false;
				$(".section_mobileAD_APPoverseas_con .con1").stop().hover(function(){
					clearInterval(Third_timer2);
					$(".section_mobileAD_APPoverseas_con .con_white").css("opacity","0.6");	
					$(this).children(".con_white").css("opacity","1");
					$(".section_mobileAD_APPoverseas_con span").eq($(this).index()).hide().stop().slideToggle("slow","linear")
				},function(){
					clearInterval(Third_timer2)
					Third_timer2=setInterval(APPoverseas,1000)
				});
				var j=0;
				Third_timer2=setInterval(APPoverseas,1000)
				function APPoverseas(){
					$(".section_mobileAD_APPoverseas_con .con_white").each(function(){
						$(".section_mobileAD_APPoverseas_con .con_white").not($(".con_white").eq(j)).css({
							opacity:"0.6"
						});
					});	
					if (j==0||j<=5) {
						$(".section_mobileAD_APPoverseas_con .con_white").eq(j).css("opacity","1");
						j++;
						if (j>5) {
							j=12;		
						}
					}
					if (j==12||j>=6) {
						$(".section_mobileAD_APPoverseas_con .con_white").eq(j).css("opacity","1");
						j--;
						if (j<6) {
							j=0;
						}
					}
				}			
			}
		}
		if ($(window).scrollTop()>=1900||$(window).scrollTop()<=1030) {			
				flag_Thr=true;
				clearInterval(Third_timer2);			
			}
	});

	$(window).scroll(function(){
		//section_mobileAD_User精准客户
		if ($(window).scrollTop()>=2400&&$(window).scrollTop()<=2600) {
			var Third_con=[
				function(){
					$(".section_mobileAD_User_content .man").fadeTo("normal",0.01,_Third_con_fn);
					$(".section_mobileAD_User_content .man").fadeTo("normal",1,_Third_con_fn);
				},
				function(){
					$(".section_mobileAD_User_content .yuan").fadeIn(1000,_Third_con_fn)
				},
				function(){
					$(".section_mobileAD_User_content .hx").fadeIn(2000,_Third_con_fn)
				},
				function(){
					$(".section_mobileAD_User_content .sj").stop().slideDown("fast",_Third_con_fn)
				},
				function(){
					$(".section_mobileAD_User_content .con1").stop().animate({height:"225px",backgroundColor:"#fff6f7"},_Third_con_fn);
					$(".section_mobileAD_User_content li").stop().show("fast");
				}
			]
			$(".section_mobileAD_User_content .con2").queue("Third_con",Third_con);
			function _Third_con_fn(){
				$(".section_mobileAD_User_content .con2").dequeue("Third_con")
			}
			_Third_con_fn();			
		}
		if ($(window).scrollTop()>=2650||$(window).scrollTop()<=2300) {
			$(".section_mobileAD_User_content .man").css("display","none");
			$(".section_mobileAD_User_content li").css("display","none").finish();
			$(".section_mobileAD_User_content .con1").stop().animate({height:"0px",backgroundColor:"#fff"},1);
			$(".section_mobileAD_User_content .yuan").hide().finish();
			$(".section_mobileAD_User_content .hx").hide().finish();
			$(".section_mobileAD_User_content .sj").hide().finish();
		}
	})
	$(window).scroll(function(){
		//section_mobileAD_middle6受众数据
		if($(window).scrollTop()>=2700&&$(window).scrollTop()<=2934){
			var Third_middle6=[
			function(){
				$(".section_mobileAD_middle6_bg .imgs1").stop().animate({"width":"690px"},3000)
			}
			];
			$(".section_mobileAD_middle6_bg").queue("Third_middle6",Third_middle6)
			function _Third_fn(){
				$(".section_mobileAD_middle6_bg").dequeue("Third_middle6")
			}
			_Third_fn();
			var Third1_middle6=[
				function(){
					$(".section_mobileAD_middle6_bg .dl1").delay(500).fadeIn(500,_Third1_fn)	
				},
				function(){
					$(".section_mobileAD_middle6_bg .dl2").delay(500).fadeIn(500,_Third1_fn)	
				},
				function(){
					$(".section_mobileAD_middle6_bg .dl3").delay(500).fadeIn(500,_Third1_fn)	
				},
				function(){
					$(".section_mobileAD_middle6_bg .dl4").delay(500).fadeIn(500)	
				}
			];
			$(".section_mobileAD_middle6_bg").queue("Third1_middle6",Third1_middle6)
			function _Third1_fn(){
				$(".section_mobileAD_middle6_bg").dequeue("Third1_middle6")
			}
			_Third1_fn();
		}
		if($(window).scrollTop()<=2538){
			$(".section_mobileAD_middle6_bg dl").hide("fast").finish()
			$(".section_mobileAD_middle6_bg .imgs1").stop().animate({width:'0px'},1)
		}
	});
	//SECOND
	var timerPlatform=null
	var timerTeam=null;
	var flag_Sec=true;
	var j=0;
	$(window).scroll(function(){
		clearInterval(timerPlatform);
		clearInterval(timerTeam);
		if($(window).scrollTop()<200||$(window).scrollTop()>1000){
			$(".introduce_paltform_cn1_Left .i2").finish()
			$(".introduce_paltform_cn1_Right .i1").finish()
			$(".introduce_paltform_cn1_Center .dl1 .i2").finish()
			$(".introduce_paltform_cn1_Center .dl2 .i1").finish();
			clearInterval(timerPlatform);
		}
		if($(window).scrollTop()>=200&&$(window).scrollTop()<=1000){
			//platform   需求方平台
			timerPlatform=setInterval(function(){
				$(".introduce_paltform_cn1_Left .i2").fadeTo(1000,0.1).delay(100).fadeTo(1000,1)
				$(".introduce_paltform_cn1_Right .i1").fadeTo(1000,0.1).delay(100).fadeTo(1000,1)
				$(".introduce_paltform_cn1_Center .dl1 .i2").fadeTo(1000,0.1).delay(100).fadeTo(1000,1)
				$(".introduce_paltform_cn1_Center .dl2 .i1").fadeTo(1000,0.1).delay(100).fadeTo(1000,1)
			},100)
		}
		if($(window).scrollTop()<=1000||$(window).scrollTop()>1800){
			$(".users_ul").queue("itemS",[]);
			$(".users_ul .point").eq(0).animate({
				top:"134px"
			},1)
			$(".users_ul .point").eq(1).animate({
				top:"148px",
				left:"245px"
			},1)
			$(".users_ul .point").eq(2).animate({
				top:"148px",
				left:"533px"
			},1)
			$(".users_ul .point").eq(3).animate({
				top:"259px",
				left:"137px"
			},1)
			$(".users_ul .point").eq(4).animate({
				top:"259px",
				left:"549px"
			},1)
			$(".users_ul .point").eq(5).animate({
				top:"330px",
				left:"245px"
			},1)
			$(".users_ul .point").eq(6).animate({
				top:"324px",
				left:"528px"
			},1)
		}
		if($(window).scrollTop()>1000&&$(window).scrollTop()<=1800){
			//users-top  定位精准用户
			if(!$(".users_ul .point").is(":animated")&&!$(".users_ul .circle").is(":animated")){
				var arrS=[
					function(){
						$(".users_ul .point").eq(0).stop().animate({
							top:"130px"
						},1000,_secondFn)
					},
					function(){
						$(".users_ul .circle").eq(0).stop().fadeTo(1000,0.01).delay(100).fadeTo(1000,1,_secondFn);
					},
					function(){
						$(".users_ul .point").eq(1).stop().animate({
							top:"144px",
							left:"241px"
						},1000,_secondFn)
					},
					function(){
						$(".users_ul .circle").eq(1).stop().fadeTo(1000,0.01).delay(100).fadeTo(1000,1,_secondFn);
					},
					function(){
						$(".users_ul .point").eq(2).stop().animate({
							top:"152px",
							left:"537px"
						},1000,_secondFn)
					},
					function(){
						$(".users_ul .circle").eq(2).stop().fadeTo(1000,0.01).delay(100).fadeTo(1000,1,_secondFn);
					},
					function(){
						$(".users_ul .point").eq(3).stop().animate({
							top:"255px",
							left:"133px"
						},1000,_secondFn)
					},
					function(){
						$(".users_ul .circle").eq(3).stop().fadeTo(1000,0.01).delay(100).fadeTo(1000,1,_secondFn);
					},
					function(){
						$(".users_ul .point").eq(4).stop().animate({
							top:"263px",
							left:"553px"
						},1000,_secondFn)
					},
					function(){
						$(".users_ul .circle").eq(4).stop().fadeTo(1000,0.01).delay(100).fadeTo(1000,1,_secondFn);
					},
					function(){
						$(".users_ul .point").eq(5).stop().animate({
							top:"326px",
							left:"241px"
						},1000,_secondFn)
					},
					function(){
						$(".users_ul .circle").eq(5).stop().fadeTo(1000,0.01).delay(100).fadeTo(1000,1,_secondFn);
					},
					function(){
						$(".users_ul .point").eq(6).stop().animate({
							top:"328px",
							left:"532px"
						},1000,_secondFn)
					},
					function(){
						$(".users_ul .circle").eq(6).stop().fadeTo(1000,0.01).delay(100).fadeTo(1000,1,_secondFn);
					},
				]
				$(".users_ul").queue("itemS",arrS);
				function _secondFn(){
					$(".users_ul").dequeue("itemS");
				}
				_secondFn();
			}
		}
		if($(window).scrollTop()<=1800||$(window).scrollTop()>=1898){
			$(".introduce_users_bottom_cn dd").finish();
		}
		if($(window).scrollTop()>1800&&$(window).scrollTop()<1898){
			//users-bottom  定位精准用户
			if(!$(".introduce_users_bottom_cn dd").is(":animated")){
				var arrS1=[
				function(){
					$(".introduce_users_bottom_cn dd").stop().animate({
						width:"0px"
					},1,_secondFn1)
				},
				function(){
					$(".introduce_users_bottom_cn dd").stop().animate({
						width:"1028px"
					},5000,_secondFn1)
				}
				]
				$(".introduce_users_bottom_cn dl").queue("itemS1",arrS1)
				function _secondFn1(){
					$(".introduce_users_bottom_cn dl").dequeue("itemS1");
				}
				_secondFn1();
			}
		}
		if($(window).scrollTop()<=1898||$(window).scrollTop()>2800){
			$(".introduce_data_bottom div").hide("fast").finish();
			$(".introduce_data_bottom_bg").stop().animate({
				width:"0px"
			},1).finish();
		}
		if($(window).scrollTop()>1898&&$(window).scrollTop()<=2800){
			//data-bottom  受众数据
			if(!$(".introduce_data_bottom_bg").is(":animated")){
				$(".introduce_data_bottom_bg").stop().animate({
					width:"870px"
				},3000)
				var arrData=[
					function(){
						$(".introduce_data_bottom .property").stop().slideDown(1000,_secondFnData)
					},
					function(){
						$(".introduce_data_bottom .area").stop().slideDown(1000,_secondFnData)
					},
					function(){
						$(".introduce_data_bottom .focus").stop().delay(500).slideDown(1000,_secondFnData)
					},
					function(){
						$(".introduce_data_bottom .consume").stop().delay(200).slideDown(1000,_secondFnData)
					}
				]
				$(".introduce_data_bottom").queue("itemData",arrData)
				function _secondFnData(){
					$(".introduce_data_bottom").dequeue("itemData")
				}
				_secondFnData();
			}
		}
		if($(window).scrollTop()>2800&&$(window).scrollTop()<=3200){
			//visitor-bottom 访客引回
				$(".introduce_visitor .p6").fadeTo(1000,0.01).delay(100).fadeTo(1000,1);
		}
		if($(window).scrollTop()<3000||$(window).scrollTop()>3800){
			$(".introduce_machine_bottom dl").hide("fast").finish();
			$(".introduce_machine_bottom .pieces").animate({
				top:"100px",
				left:"15px"
			},1).finish()
			$(".introduce_machine_bottom .pieces").show(1)
		}
		if($(window).scrollTop()>=3000&&$(window).scrollTop()<=3800){
			//machine-bottom  多维度优化机制
			if(!$(".introduce_machine_bottom .pieces").is(":animated")){
			var arrMachine1=[
				function(){
					$(".introduce_machine_bottom .pieces").stop().animate({
						left:"876px"
					},4000,fnMachine1)
				},
				function(){
					$(".introduce_machine_bottom .pieces").stop().animate({
						top:"245px"
					},500,fnMachine1)
				},
				function(){
					$(".introduce_machine_bottom .pieces").stop().animate({
						left:"15px"
					},5000,fnMachine1)
				},
				function(){
					$(".introduce_machine_bottom .pieces").hide(1)
				}
			]
			$(".introduce_machine_bottom").queue("itemMachine1",arrMachine1);
			function fnMachine1(){
				$(".introduce_machine_bottom").dequeue("itemMachine1")
			}
			fnMachine1();
			var arrMachine=[
				function(){
					$(".introduce_machine_bottom dl:eq(0)").stop().fadeIn(1000,fnMachine)
				},
				function(){
					$(".introduce_machine_bottom dl:eq(1)").stop().fadeIn(1000,fnMachine)
				},
				function(){
					$(".introduce_machine_bottom dl:eq(2)").stop().fadeIn(1000,fnMachine)
				},
				function(){
					$(".introduce_machine_bottom dl:eq(3)").stop().fadeIn(1000,fnMachine)
				},
				function(){
					$(".introduce_machine_bottom dl:eq(4)").stop().fadeIn(1000,fnMachine)
				},
				function(){
					$(".introduce_machine_bottom dl:eq(5)").stop().fadeIn(1000,fnMachine)
				},
				function(){
					$(".introduce_machine_bottom dl:eq(6)").stop().fadeIn(1000,fnMachine)
				},
				function(){
					$(".introduce_machine_bottom dl:eq(7)").stop().fadeIn(1000,fnMachine)
				},
				function(){
					$(".introduce_machine_bottom dl:eq(8)").stop().fadeIn(1000,fnMachine)
				},
				function(){
					$(".introduce_machine_bottom dl:eq(9)").stop().fadeIn(1000)
				}
			];
			$(".introduce_machine_bottom").queue("itemMachine",arrMachine)
			function fnMachine(){
				$(".introduce_machine_bottom").dequeue("itemMachine")
			}
			fnMachine();
			}
		}
		if($(window).scrollTop()<4200){
			$(".introduce_mediaHQ_bottom_left").hide("fast")
			$(".introduce_mediaHQ_bottom_right").hide("fast")
		}
		if($(window).scrollTop()>=4200){
			//mediaHQ 优质媒体资源
			var arrMediaHQ=[
				function(){
					$(".introduce_mediaHQ_bottom_left").slideDown(2000,fnMediaHQ)
				},
				function(){
					$(".introduce_mediaHQ_bottom_right").fadeIn(1000)
				}
			];
			$(".introduce_mediaHQ_bottom").queue("itemMediaHQ",arrMediaHQ);
			function fnMediaHQ(){
				$(".introduce_mediaHQ_bottom").dequeue("itemMediaHQ");
			}
			fnMediaHQ();
		}
		if($(window).scrollTop()>=4700){
			flag_Sec=true;
			//team 营销团队
			if(flag_Sec){
				moveTeam();
				$(".introduce_team_bottom li").each(function(i){
					if(i!=j){
						$(this).css("opacity","0.3")
					}else{
						$(this).css("opacity","1")
					}
				})
				function moveTeam(){
					timerTeam=setInterval(function(){
						$(".introduce_team_bottom li").eq(j).css("opacity","1").siblings().css("opacity","0.3");
						j++;
						if(j>5){
							j=0;
						}
					},1000)
				}
				$(".introduce_team_bottom li").hover(function(){
					clearInterval(timerTeam)
					$(this).css("opacity","1").siblings().css("opacity","0.3")
				},function(){
					// $(this).css("opacity","0.3")
					j=$(this).index();
					clearInterval(timerTeam)
					moveTeam();
				})
			}
		}
		if($(window).scrollTop()<4700){
			flag_Sec=false;
			$(".introduce_team_bottom li").css("opacity","1")
			clearInterval(timerTeam)
		}
	});
	$(".li_outer").each(function(i){
		//users-bottom 定位精准用户
		$(this).hover(function(){
			$(this).finish().animate({
				width:"274px",
				height:"139px"
			},1000)
		},function(){
			$(this).finish().animate({
				width:"252px",
				height:"120px"
			},1000)
		},1000)
	});

	//FOURTH
	//视频广告中间第一部分
	var flag_Fourth=true;
	$(window).scroll(function(){
		if($(window).scrollTop()>=560&&$(window).scrollTop()<=780){
			if(flag_Fourth){
				flag_Fourth=false;
				var Fourth=[
				function(){
						$("#section_videoAD_middle1 li").hide("fast",_Fourth_fn)
					},
					function(){
						$("#section_videoAD_middle1 .imgs2").hide(100).fadeIn("slow",_Fourth_fn)
					},
					function(){
						$("#section_videoAD_middle1 .lis1").show("fast").delay(1000).css({
							"background":"url(images/videoAD_02.png)",
							"backgroundPosition":"-150px -270px"
						},_Fourth_fn)
					},
					function(){
						$("#section_videoAD_middle1 .lis4").fadeTo("slow","0.5",_Fourth_fn)
					},
					function(){
						$("#section_videoAD_middle1 .lis4").fadeTo("slow","1",_Fourth_fn)
					},
					function(){
						$("#section_videoAD_middle1 .lis2").delay(500).slideDown(2000)
						$("#section_videoAD_middle1 .lis3").delay(500).slideDown(2000,_Fourth_fn)
					},
					function(){
						$("#section_videoAD_middle1 .lis0:gt(3)").delay(1000).fadeIn(2000)
					}
				];
				$("#section_videoAD_middle1").queue("Fourth_",Fourth)
				function _Fourth_fn(){
					$("#section_videoAD_middle1").dequeue("Fourth_")
				}
				_Fourth_fn();			
			}	
		}
		if($(window).scrollTop()<=200||$(window).scrollTop()>=1000){
			flag_Fourth=true;
			$("#section_videoAD_middle1").queue("Fourth_",[])
		}
	})
	//视频广告中间第二部分
	$(function() {
		var size=$(".img li").size();
		var size1=$(".img2 li").size();
		var size2=$(".img3 li").size();
		var i = 0;
		var t = setInterval(move, 1500);
		function move() {
		    i++;
		    if (i == size||i == size1||i == size2) {
		        i = 0;
		    }
		    $(".img li").eq(i).fadeIn(300).siblings().fadeOut(300);
		    $(".img2 li").eq(i).fadeIn(300).siblings().fadeOut(300);
		    $(".img3 li").eq(i).fadeIn(300).siblings().fadeOut(300);

		}
		 $(".section_videoAD_middle2_mobile").children().hover(function() {
		    clearInterval(t);
		    var _this=this;
			timer = setInterval(function(){
				$(_this).stop().animate({
					left:"5px",
					top:"2px",
					right:"5px"
				},100,function(){
					$(_this).css({
						left:"inherit",
						top:"inherit"
					})
				})
			},120)
		}, function() {
		    t = setInterval(move, 1500)
		    clearInterval(timer)
			$(this).css({
				left:"0px",
				top:"0px"
			},17)
		})
	});

	//SIXTH
	$(function(){
  		function show(){
   			var mydate = new Date();
  			var str = "" + mydate.getFullYear() + " 年 ";
   			str += (mydate.getMonth()+1) + " 月 ";
   			str += mydate.getDate() + " 日";
   			return str;
  		}
		$(".section_head_content_time").html(show());
	})
	$(window).scroll(function(){
	    if($(window).scrollTop()>685){
	        $('.section_head_content_foot').css({
	            position:'fixed',
	            left:'0',
	            top:'0',
	            zIndex:'2',
	            background:'gray',
	            height:'67px'
	        })
	        $('.section_head_content_foot_bj').css({
	            position:'fixed',
	            left:'0',
	            top:'0'
	        })
	    }
	    else{
	        $('.section_head_content_foot').css({
	            position:'absolute',
	            left:'0',
	            bottom:'0',
	            top:'',
	            background:''
	        })
	        $('.section_head_content_foot_bj').css({
	            position:'absolute',
	            bottom:'0',
	            left:'0',
	            top:'',
	            opacity:'0.2'
	        })
	    }
	})
	$('.section_head_content_foot_bt a').mouseover(function(){	
		$(this).css('color','yellow')
	})
	$('.section_head_content_foot_bt a').mouseout(function(){
		$(this).css('color','black')
	})
	$('.section_contact_ggxq').find('label').click(function(){
	    if($(this).children('img').attr('src')=='images/false.png'){
	        $(this).children('img').attr('src','images/true.png')
	    }
	    else{
	        $(this).children('img').attr('src','images/false.png')
	    }
	})
	$('.section_contact_yjhf').find('label').click(function(){
	    $('.section_contact_yjhf').find('label').children('img').attr('src','images/false.png')
	    $(this).children('img').attr('src','images/true.png')
	})
	var xm=/^[\u4e00-\u9fa5]+$/;
	var lxdh=/^[1][3578][0-9]{9}$/;
	var yxdz=/^\w+@[a-z0-9]+\.[a-z]{2,4}$/;
	var ggxq=/^[\u4e00-\u9fa5]+$/;
	var lybz=/^[\u4e00-\u9fa5]+$/;
	var flag_Six=null;
	function pd(){
	    if(xm.test($('.section_contact_xmval').val())&&lxdh.test($('.section_contact_lxdhval').val())&&yxdz.test($('.section_contact_yxdzval').val())&&ggxq.test($('.section_contact_ggxq_p4_ip').val())&&lybz.test($('.section_contact_lybzval').val())){
	        flag_Six=true;
	    }
	    else{
	        flag_Six=false;
	    }
	}
	$('.section_contact_tijiao button').click(function(){
	    pd();
	    if(flag_Six){
	    	$('.section_contact').hide();
	        $('.section_contact_success').show();
	        $('.section_contact').find('input').val('');
	        $('.section_contact').find('textarea').val('');
	    }
	    else{
	    	$('.section_contact').hide();
	        $('.section_contact_false').show();
	        $('.section_contact').find('input').val('');
	        $('.section_contact').find('textarea').val('');
	    }  
	})
	$('.section_contact_success_button').click(function(){
    	$('.section_contact_success').hide(); 	
    	$('.section_contact').show();
	})

	$('.section_contact_false_button').click(function(){
    	$('.section_contact_false').hide();
    	$('.section_contact').show();	
	});

	//FIRST
	//创建隐藏函数
	var firstpagehide1=function (){
		$('.firstpage_introduce_content div').hide()
		$('.first_int_con2').hide()
		$('.first_int_con3').hide()
		$('.first_int_con5').hide()
	}
	var firstpagehide2=function (){
		$('.firstpage_case_content div').fadeTo(1,0.01) 
		$('.first_case_con2').fadeTo(1,0.01)
	    $('.first_case_con3').fadeTo(1,0.01)
	}
	var firstpagehide3=function (){
		$('.firstpage_video_content div').hide()
		$('.first_video_con2').hide()
		$('.first_video_con3').hide()
	}
	var firstpagehide4=function (){
		$('.firstpage_advertise_content div').fadeTo(1,0.01)
		$('.first_adver_con2').fadeTo(1,0.01)
	    $('.first_adver_con3').fadeTo(1,0.01)
	}
	var firstpagehide5=function (){
		$('.firstpage_about_content div').hide()
		$('.first_about_con2').hide()
		$('.first_about_con3').hide()
	}
	var firstpagehide6=function (){
		$('.firstpage_consult_content div').fadeTo(1,0.01)
		$('.first_consult_con2').fadeTo(1,0.01)
	    $('.first_consult_con3').fadeTo(1,0.01)
	}
	//鼠标进入\离开
	$(".first_int_con4").mouseenter(function(){
		$(this).css("background-color","orange")
	})
	$(".first_int_con4").mouseleave(function(){
		$(this).css("background-color","#e94b59")
	})
	$(".first_consult_con6_2").mouseenter(function(){
		$(this).css("background","orange")
	})
	$(".first_consult_con6_2").mouseleave(function(){
		$(this).css("background","")
	})
    window.onscroll=function(){
       var scroll=$(window).scrollTop();
		//51DSP介绍
		if(scroll<400||scroll>1050){
			firstpagehide1();
		}else{
			var _firstd1=[
			    function(){$('.first_int_con1').slideDown(500,_firstfn1)},
			    function(){$('.first_int_con2').slideDown(500,_firstfn1)},
			    function(){$('.first_int_con3').slideDown(500,_firstfn1)},
			    function(){$('.first_int_con4').slideDown(500,_firstfn1)},
			    function(){$('.first_int_con5').delay(500).show(500,_firstfn1)}
			]
            $('body').queue("item",_firstd1)
	      var _firstfn1=function (){
              $('body').dequeue("item")
	       }
	       _firstfn1();
		}
		//51DSP案例
		if(scroll<1000||scroll>1600){
			firstpagehide2();
		}else{
            var first_cased2=[
             	function(){$('.first_case_con1').fadeTo(500,1,_firstfn2)},
             	function(){$('.first_case_con2').delay(100).fadeTo(500,1,_firstfn2)},
             	function(){$('.first_case_con3').delay(100).fadeTo(500,1,_firstfn2)},
             	function(){$('.first_case_con4').delay(100).fadeTo(500,1,_firstfn2)},	
             	function(){$('.first_case_con4_1').fadeTo(500,1,_firstfn2)},
             	function(){$('.first_case_con4_4').delay(500).fadeTo(500,1,_firstfn2)},
             	function(){$('.first_case_con4_6').fadeTo(500,1,_firstfn2)},
             	function(){$('.first_case_con4_2').delay(500).fadeTo(500,1,_firstfn2)},
             	function(){$('.first_case_con4_5').fadeTo(500,1,_firstfn2)},
             	function(){$('.first_case_con4_3').delay(500).fadeTo(500,1,_firstfn2)},
             	function(){$('.first_case_con4_7').fadeTo(500,1,_firstfn2)},
            ]
            $('body').queue("item2",first_cased2)
	     	var _firstfn2=function (){
          		$('body').dequeue("item2")
	       	}
	       	_firstfn2();
		}
		//视频广告
		if(scroll<1600||scroll>2200){
			firstpagehide3();
		}else{
        	var first_videod3=[
                  function(){$('.first_video_con1').show(500,_firstfn3)},
                  function(){$('.first_video_con2').show(500,_firstfn3)},
                  function(){$('.first_video_con3').show(500,_firstfn3)},
                  function(){$('.first_video_con4').show(500,_firstfn3)},
                  function(){ $('.first_video_con4_1').show(500,_firstfn3)},
                  function(){$('.first_video_con4_6').show(1500,_firstfn3)},
                  function(){$('.first_video_con4_9').show(500,_firstfn3)},
                  function(){$('.first_video_con4_4').delay(0).show(500,_firstfn3)},
                  function(){$('.first_video_con4_2').show(500,_firstfn3)},
                  function(){ $('.first_video_con4_7').show(500,_firstfn3)},
                  function(){$('.first_video_con4_10').show(500,_firstfn3)},
                  function(){$('.first_video_con4_5').delay(0).show(500,_firstfn3)},
                  function(){$('.first_video_con4_3').show(500,_firstfn3)},
                  function(){ $('.first_video_con4_8').show(500,_firstfn3)},
                  function(){ $('.first_video_con4_11').show(500,_firstfn3)},
        	]
           	$('body').queue("item3",first_videod3)
	       	var _firstfn3=function (){
            	$('body').dequeue("item3")                  
	       	}
	      	_firstfn3();
        }
        //移动端广告
        if(scroll<2200||scroll>2800){
     		firstpagehide4();
     	}else{
			var first_adverd4=[
				function(){$('.first_adver_con1').fadeTo(500,1,_firstfn4)},
             	function(){$('.first_adver_con2').delay(100).fadeTo(500,1,_firstfn4)},
             	function(){$('.first_adver_con3').delay(100).fadeTo(500,1,_firstfn4)},
             	function(){$('.first_adver_con4').delay(500).fadeTo(500,1,_firstfn4)},	
				function(){$('.first_adver_con5').delay(100).fadeTo(500,1,_firstfn4)},
             	function(){$('.first_adver_con6').delay(500).fadeTo(500,1,_firstfn4)},
             	function(){$('.first_adver_con7').delay(500).fadeTo(500,1,_firstfn4)},	
             	function(){$('.first_adver_con8').delay(500).fadeTo(500,1,_firstfn4)}	
			]
			$('body').queue("item4",first_adverd4)
	        var _firstfn4=function (){
                $('body').dequeue("item4")
	        }
	        _firstfn4();
		}
		//关于我们
		if(scroll<2800||scroll>3400){
			firstpagehide5();
		}else{
            var _firstd5=[
			    function(){$('.first_about_con1').slideDown(500,_firstfn5)},
			    function(){$('.first_about_con2').slideDown(500,_firstfn5)},
			    function(){$('.first_about_con3').slideDown(500,_firstfn5)},
			    function(){$('.first_about_con4').show(500,_firstfn5)},
			    function(){$('.first_about_con5').show(500,_firstfn5)}
		    ]
        	$('body').queue("item5",_firstd5)
      		var _firstfn5=function (){
          		$('body').dequeue("item5")
       		}
      		_firstfn5();
       	}
	    //广告咨询
       	if(scroll<3400){
       		firstpagehide6();
       	}else{
            var first_adverd6=[
				function(){$('.first_consult_con1').fadeTo(500,1,_firstfn6)},
             	function(){$('.first_consult_con2').fadeTo(500,1,_firstfn6)},
             	function(){$('.first_consult_con3').fadeTo(500,1,_firstfn6)},
             	function(){$('.first_consult_con4').fadeTo(500,1,_firstfn6)},	
				function(){$('.first_consult_con5').fadeTo(1000,1,_firstfn6)},
             	function(){$('.first_consult_con6').fadeTo(500,1,_firstfn6)},
             	function(){$('.first_consult_con6_1').delay(100).fadeTo(500,1,_firstfn6)},	
             	function(){$('.first_consult_con6_2').delay(100).fadeTo(500,1,_firstfn6)}	
			]
		    $('body').queue("item6",first_adverd6)
          	var _firstfn6=function (){
         		$('body').dequeue("item6")
           	}
          	_firstfn6();
        }
   	}
   	//FIFITH
   	$.fn.shake = function (intShakes /*Amount of shakes*/, intDistance /*Shake distance*/, intDuration /*Time duration*/,fn) {
     var jqNode_l=$(this).css("left");
      this.each(function () {
          var jqNode = $(this);
         jqNode.css({ position: 'abstruct' });
         for (var x = 1; x <= intShakes; x++) {
            jqNode.stop().animate({ left:(parseInt(jqNode_l)+(intDistance * -1)) }, (((intDuration / intShakes) / 4)))
          	.animate({ left:(parseInt(jqNode_l)+intDistance*2 )}, ((intDuration / intShakes) / 2))
          	.animate({ left: jqNode_l }, (((intDuration / intShakes) / 4)));
        }
     });
     return this;
 }
 	var flag=true;
	$(window).scroll(function(){
		var scrollTop=$(window).scrollTop();
		var fifth_fn1=[
			function(){$(".serviceItem div:even").fadeOut("slow",_fifth1)},	
			function(){$(".serviceItem div:even").fadeIn("slow",_fifth1)},
			function(){$(".serviceItem div:odd").delay(500).fadeOut("slow",_fifth1)},
			function(){$(".serviceItem div:odd").fadeIn("slow")}
		]
		$(".serviceItem").queue('fifth_lis1',fifth_fn1);
		var _fifth1=function(){
			$(".serviceItem").stop().dequeue('fifth_lis1');
		}	
		var fifth_fn=[
			function(){$(".serviceProcess_Sell_bg").animate({height:"122px"},100,_fifth)},
			function(){$(".serviceProcess_Sell").animate({height:"122px"},100,_fifth)},
			function(){$(".serviceProcess_Perform_1_bg").animate({height:"122px"},100,_fifth)},
			function(){$(".serviceProcess_Perform_1").animate({height:"122px"},100,_fifth)},
			function(){$(".serviceProcess_Perform_2_bg").animate({height:"122px"},100,_fifth)},
			function(){$(".serviceProcess_Perform_2").animate({height:"122px"},100,_fifth)},
			function(){$(".serviceProcess_afteSales_bg").animate({height:"122px"},100,_fifth)},
			function(){$(".serviceProcess_afteSales").animate({height:"122px"},100,_fifth)}
		]
		$(".serviceProcess").queue('fifth_lis',fifth_fn);
		var _fifth=function(){
			$(".serviceProcess").stop().dequeue('fifth_lis');
		}
		if(scrollTop>350&&scrollTop<703){
			if(flag){
				flag=false;
				_fifth1();

			}
		}
		if(scrollTop<350||scrollTop>703){
			flag=true;
		}
		if(scrollTop>703&&scrollTop<1289){
			_fifth();
		}
		if(scrollTop<703||scrollTop>1289){
			var fifth_fn2=[
				function(){$(".serviceProcess_Sell_bg").animate({height:"0px"},1,_fifth2)},
				function(){$(".serviceProcess_Sell").animate({height:"0px"},1,_fifth2)},
				function(){$(".serviceProcess_Perform_1_bg").animate({height:"0px"},1,_fifth2)},
				function(){$(".serviceProcess_Perform_1").animate({height:"0px"},1,_fifth2)},
				function(){$(".serviceProcess_Perform_2_bg").animate({height:"0px"},1,_fifth2)},
				function(){$(".serviceProcess_Perform_2").animate({height:"0px"},1,_fifth2)},
				function(){$(".serviceProcess_afteSales_bg").animate({height:"0px"},1,_fifth2)},
				function(){$(".serviceProcess_afteSales").animate({height:"0px"},1,_fifth2)}
			]
			$(".serviceProcess").queue('fifth_lis2',fifth_fn2);
			var _fifth2=function(){
				$(".serviceProcess").stop().dequeue('fifth_lis2');
			}
			_fifth2();
		}
	})
	
	$(".consultingMessage_submit").click(function(){
		var val1=$(".consultingMessage_name input").val();
		var val2=$(".consultingMessage_num input").val();
		var val3=$(".consultingMessage_email input").val();
		var val4=$(".consultingMessage_note textarea").val();
		var re1=/^[1][3578][0-9]{9}$/;
		var re2=/^\w+@[0-9a-z]+\.[a-z]+$/;
		// if(re1.test(val2)||re2.test(val3)){
		// 	return true;
		// }else{
		// 	alert("输入错误！");
		// }
		if(val1!=""&&val2!=""&&val3!=""&&val4!=""&&(re1.test(val2))&&(re2.test(val3))){
				$(".consultingMessage_name input").val("");
				$(".consultingMessage_num input").val("");
				$(".consultingMessage_email input").val("");
				$(".consultingMessage_note textarea").val("");
		}else{
			alert("请输入完整信息！");
		}
	})
	$(".CustomerCase_firstLine li").hover(function(){
		$(this).shake(2,5,200)
		},function(){
			$(this).stop();
		})
	$(".CustomerCase_secondLine li").hover(function(){
		$(this).shake(2,5,200)
		},function(){
			$(this).stop();
		})
	
}
