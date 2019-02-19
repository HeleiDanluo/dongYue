/*
 * 移动端头像裁剪插件
 * 整理：呼和浩特米米乐乐高儿童科技中心
 * http://baby.memiler.com/index.php?s=/wap
 */
(function($){

	$.fn.crop = function(options){
		var v = {
			w: '',
			h: '',
			r: '',
			rh: '',
			res:'',
			barHeight:50,
			touchBgColor:'',
			isCircle:true,
			angle:0,
			initialScale:1,
			callback:function(base64Data){}
		}
		var o = $.extend(v,options);
		//重加载时移除
		$(this).html('');
		
		//如果盒子高度少于宽度提醒设置错误
		if(o.h<o.w){
			$.warning({words:'容器区域高度须大于等于宽度！'})
			return false;
		}
		//如果半径大于盒子宽度的一半，则提醒，用在手机上加限制
		if(o.r>o.w*0.5){
			$.warning({words:'请在手机上浏览或将浏览器宽度调整到高度二分之一以下！'})
			return false;
		}
		var box = $(this);
		if(!box.attr('id')){
			id = 'curbox'+Date.parse(new Date());
			box.attr('id',id);
		}else{
			id = box.attr('id');
		}
		var first = true;
		var element,img,edit_finished,select_img;
		//全局变量
		var x = 0,y = 0,_x = 0,scale = v.initialScale,gx = 0,gy = 0,p_left = 0,p_top = 0,
			gw,gh,ngw,ngh,
			base64Data = '',
			t;
		var pos = new Object();

		//获取图片信息
		var image = new Image();
		var backgroundWidth = o.r * 2;

		if(o.res==''){
			var canvasText = $("<canvas />").attr({
					width: o.r*2,
					height: o.r*2
				}).get(0);
			o.res=canvasText.toDataURL('image/jpeg');
		}
		image.src = o.res;
		image.onload = function(){
			//添加盒子内元素
			if(box.html()!=''){
				first = false;
				$('#select_btn span').text('重选');
				gx = (o.w-o.r*2)*0.5;
				gy = (o.h-o.r*2)*0.5;
			}else{
				box.append(
					'<div id="cut-mask" class="cut-mask" style="width:'+o.w+'px;height:'+o.h+'px;">'+
						'<canvas id="canvas-mask"></canvas>'+
					'</div>'+
					'<div id="cut-img" class="cut-img" style="width:'+o.w+'px;height:'+o.h+'px;top:'+(-o.h)+'px;background-size:'+image.width+'px '+image.height+'px;"></div>' +
					'<canvas id="temp-img" class="temp-img"></canvas>'
				);
				//设置盒子样式
				box.css({
					"width":o.w+"px",
					"height":o.h+"px",
					"position":"relative",
					"left":"0px",
					"top":"0px",
					"overflow":"hidden"
				});
				box.after(
					'<div class="cut-nav" font="16">' +
					'<a class="select-btn" id="select_btn">' +
					'<input type="file" id="selectImageFile" class="select-images-file" accept="images/*" capture="camera" /><span>选择</span></a>' +
					'<a class="edit-finished" id="edit_finished">完成</a>' +
					'</div>'
				);

				//初始化设置遮罩
				var mask = document.getElementById('canvas-mask');

				var msk = mask.getContext('2d');
				mask.width = o.w;
				mask.height = o.h;

				//画遮罩矩形
				msk.beginPath();
				msk.rect(0,0,o.w,o.h);
				msk.globalAlpha = 0.8;
				msk.fill();//画实心圆
				msk.closePath();

				o.h = first?o.rh-o.barHeight:o.rh;//重置高度
				//画一个实心圆
				msk.globalCompositeOperation = 'destination-out';
				msk.beginPath();
				msk.arc(o.w*0.5,o.h*0.5,o.r,0,(Math.PI/180)*360,false);//圆形选框
				msk.fill();
				msk.closePath();
				//实心矩形
				msk.beginPath();
				msk.rect((o.w-o.r*2)*0.5,(o.h-o.r*2)*0.5,o.r*2,o.r*2);//矩形选框
				msk.fill();
				msk.closePath();

				//画矩形选框
				msk.globalCompositeOperation = 'source-over';
				msk.beginPath();
				msk.lineWidth=1;//外框
				msk.strokeStyle="#ffffff";//外框
				msk.strokeRect((o.w-o.r*2)*0.5,(o.h-o.r*2)*0.5,o.r*2,o.r*2);//矩形选框
				msk.fill();
				msk.closePath();
				//绘制线条
				msk.beginPath();
            	msk.moveTo((o.w-o.r*2)*0.5+o.r*2/3+0.5,(o.h-o.r*2)*0.5);
            	msk.lineTo((o.w-o.r*2)*0.5+o.r*2/3+0.5,(o.h-o.r*2)*0.5+o.r*2); //竖线1
				msk.moveTo((o.w-o.r*2)*0.5+2*o.r*2/3+0.5,(o.h-o.r*2)*0.5);
            	msk.lineTo((o.w-o.r*2)*0.5+2*o.r*2/3+0.5,(o.h-o.r*2)*0.5+o.r*2); //竖线2
				msk.moveTo((o.w-o.r*2)*0.5,(o.h-o.r*2)*0.5+o.r*2/3+0.5);
            	msk.lineTo((o.w-o.r*2)*0.5+o.r*2,(o.h-o.r*2)*0.5+o.r*2/3+0.5); //竖线2
				msk.moveTo((o.w-o.r*2)*0.5,(o.h-o.r*2)*0.5+2*o.r*2/3+0.5);
            	msk.lineTo((o.w-o.r*2)*0.5+o.r*2,(o.h-o.r*2)*0.5+2*o.r*2/3+0.5); //竖线2
            	msk.stroke();
				msk.closePath();

				gw = image.width,
				gh = image.height,
				ngw = image.width,
				ngh = image.height,

				//矩形选框位置参数
				pos.l = (o.w-o.r*2)*0.5;
				pos.t = (o.h-o.r*2)*0.5;
				pos.r = (o.w-o.r*2)*0.5+o.r*2;
				pos.b = (o.h-o.r*2)*0.5+o.r*2;

				element = document.getElementById(id);
				img = document.getElementById('cut-img');
				select_btn = document.getElementById('select_btn');
				edit_finished = document.getElementById('edit_finished');

				$(img).css({'background-position':(o.w-o.r*2)*0.5+'px '+(o.h-o.r*2)*0.5+'px'});
			}

			if(first){
				//触控移动
				touch.on('#'+id,'touchstart',start);
				touch.on('#'+id,'drag',move);
				touch.on('#'+id,'dragend',end);
				//触控缩放
				touch.on('#'+id,'pinchstart',startscale);
				touch.on('#'+id,'pinch',movescale);
				touch.on('#'+id,'pinchend',endscale);

				//按钮事件
				$('#edit_finished').click(function(){
					submitBase64();
				});

				$('#selectImageFile').change(function(){
					var btn = document.getElementById('selectImageFile');
					var file = btn.files[0];
					//图片方向角
					var Orientation = null;
					var rFilter = /^(image\/jpeg|image\/png)$/i; // 检查图片格式
					if(!rFilter.test(file.type)){
						$.warning({words:'请确保文件为图像类型'})
						return false;
					}

            		if(file) {
                        //获取照片方向角属性，用户旋转控制
				        EXIF.getData(file, function() {
				            EXIF.getAllTags(this);
				            Orientation = EXIF.getTag(this, 'Orientation');
				        });

                		var reader = new FileReader();
                		reader.onload = function(e) {
							var source_img = new Image();
							source_img.src = e.target.result;
							source_img.onload = function(){
								var naturalWidth = this.naturalWidth;
								var naturalHeight = this.naturalHeight;
								var imageWidth, imageHeight;

								if(naturalWidth > naturalHeight){
									imageHeight = backgroundWidth;
									imageWidth = imageHeight * naturalWidth / naturalHeight;
								}else if(naturalWidth < naturalHeight){
									imageWidth = backgroundWidth;
									imageHeight = imageWidth * naturalHeight / naturalWidth;
								}

								var base64 = null;
								//修复ios
								if (navigator.userAgent.match(/iphone/i)) {
									var canvas = document.createElement('canvas');
									var con = canvas.getContext('2d');
									if(Orientation != "" && Orientation != 1) {
										switch(Orientation){
											case 6://需要顺时针（向左）90度旋转
												rotateImg(this,'left',canvas);
												break;
											case 8://需要逆时针（向右）90度旋转
												rotateImg(this,'right',canvas);
												break;
											case 3://需要180度旋转
												rotateImg(this,'',canvas);
												break;
										}
									} else {
										canvas.width = imageWidth;
										canvas.height = imageHeight;
										con.drawImage(this,0,0,imageWidth,imageHeight);
										gw = ngw = imageWidth;
										gh = ngh = imageHeight;
									}

									base64 = canvas.toDataURL("image/jpeg", 1);
								} else {
									var canvas = document.createElement('canvas');
									var con = canvas.getContext('2d');
									canvas.width = imageWidth;
									canvas.height = imageHeight;
									con.drawImage(this,0,0,imageWidth,imageHeight);
									gw = ngw = imageWidth;
									gh = ngh = imageHeight;
									base64 = canvas.toDataURL("image/jpeg", 1);
								}

								image.src = base64;

								$(img).css({
									'background-image':'url('+base64+')',
									'background-size':ngw+'px '+ngh+'px'
								});


								function rotateImg(img, direction, canvas) {
									//最小与最大旋转方向，图片旋转4次后回到原方向
									var min_step = 0;
									var max_step = 3;
									if (img == null)return;
									var step = 2;
									if (step == null) {
										step = min_step;
									}
									if (direction == 'right') {
										step++;
										//旋转到原位置，即超过最大值
										step > max_step && (step = min_step);
									}else if(direction == '') {
										step = 2;
									} else {
										step--;
										step < min_step && (step = max_step);
									}
									//旋转角度以弧度值为参数
									var degree = step * 90 * Math.PI / 180;
									switch (step) {
										case 0:
											canvas.width = imageWidth;
											canvas.height = imageHeight;
											con.drawImage(img, 0, 0, imageWidth, imageHeight);
											gw = ngw = imageWidth;
											gh = ngh = imageHeight;
											break;
										case 1:
											canvas.width = imageHeight;
											canvas.height = imageWidth;
											con.rotate(degree);
											con.drawImage(img, 0, -imageHeight, imageWidth, imageHeight);
											gw = ngw = imageHeight;
											gh = ngh = imageWidth;
											break;
										case 2:
											canvas.width = imageWidth;
											canvas.height = imageHeight;
											con.rotate(degree);
											con.drawImage(img, -imageWidth, -imageHeight, imageWidth, imageHeight);
											gw = ngw = imageWidth;
											gh = ngh = imageHeight;
											break;
										case 3:
											canvas.width = imageHeight;
											canvas.height = imageWidth;
											con.rotate(degree);
											con.drawImage(img, -imageWidth, 0, imageWidth, imageHeight);
											gw = ngw = imageHeight;
											gh = ngh = imageWidth;
											break;
									}
								}
							}
                		};

                		reader.readAsDataURL(file);
            		}
				});
			}


			//触控移动
			function start(event){
				event.preventDefault();
			}
			function move(event){
				event.preventDefault();
				if(first){
					return;
				}

				//定位 防止超出选区
				p_left = gx+event.x;
				p_top = gy+event.y;
				if(p_left>pos.l){
					p_left = pos.l;
				}
				if(p_top>pos.t){
					p_top = pos.t;
				}
				if(p_left+ngw<pos.r){
					p_left = pos.r-ngw+1;
				}
				if(p_top+ngh<pos.b){
					p_top = pos.b-ngh+1;
				}

				$('#cut-img').css({
					'background-position':p_left+'px '+p_top+'px',
					'background-repeat':'no-repeat'
				});
			}
			function end(event){
				gx = p_left;
				gy = p_top;
			}


			//触控缩放
			function startscale(event){
				event.preventDefault();
			}
			function movescale(event){
				event.preventDefault();
				if(first){
					return;
				}

				scale = event.scale;
				scale = scale>3?3:scale;
				scale = scale<0?0:scale;

				if(gw*scale>=o.r*2 && gh*scale>=o.r*2){
					ngw = gw*scale;
					ngh = gh*scale;

					//定位 防止超出选区
					p_left = gx*scale;
					p_top = gy*scale;
					p_left = p_left-(ngw-gw)/2;
					p_top = p_top-(ngh-gh)/2;

					if(p_left>pos.l){
						p_left = pos.l;
					}

					if(p_top>pos.t){
						p_top = pos.t;
					}
					//宽度小于选区
					if(p_left+ngw<pos.r){
						p_left = pos.r-ngw+1;
					}
					//高度小于选区
					if(p_top+ngh<pos.b){
						p_top = pos.b-ngh+1;
					}

					$('#cut-img').css({
						'background-size':ngw+'px '+ngh+'px',
						'background-position':p_left+'px '+p_top+'px',
						'background-repeat':'no-repeat'
					});
				}
			}
			function endscale(event){
				var xy = $(img).css('background-size');
				var arr = xy.split(' ');
				gx = parseInt($(img).css('background-position-x'));
				gy = parseInt($(img).css('background-position-y'));
				gw = parseInt(arr[0]);
				gh = parseInt(arr[1]);
			}

			//保存提交图片Base64数据
			function submitBase64(){
				if(first){
					$.warning({words:'请先选择一张图片'})
					return;
				}

				// 初始化canvas
				var canvas = $("<canvas />").attr({
					width: o.r*2,
					height: o.r*2
				}).get(0);
				canvasContext = canvas.getContext("2d");
				canvasContext.fillStyle = "#eee";
				canvasContext.fillRect(0, 0, canvas.width, canvas.height);

				var cx = (o.w*0.5-o.r-gx)*image.width/gw,
					cy = (o.h*0.5-o.r-gy)*image.height/gh,
					cw = o.r*2*image.width/gw,
					ch = o.r*2*image.height/gh;

				var nx = ny = nw = nh = 0;
				var dx = dy = dw = dh = 0;
				if(cx<0){
					nx = 0;
					if(cx+cw<image.width){
						nw = cx+cw;
					}else{
						nw = image.width;
					}
				}else{
					nx = cx;
					if(cx+cw<image.width){
						nw = cw;
					}else{
						nw = image.width-cx;
					}
				}

				if(cy<0){
					ny = 0;
					if(cy+ch<image.height){
						nh = cy+ch;
					}else{
						nh = image.height;
					}
				}else{
					ny = cy;
					if(cy+ch<image.height){
						nh = ch;
					}else{
						nh = image.height-cy;
					}
				}

				dx = (cx<0?-cx:0)*gw/image.width;
				dy = (cy<0?-cy:0)*gh/image.height;
				dw = (nw*gw/image.width<o.r*2?nw*gw/image.width:o.r*2);
				dh = (nh*gh/image.height<o.r*2?nh*gh/image.height:o.r*2);

				canvasContext.drawImage(
					image,
					nx,
					ny,
					nw,
					nh,
					dx,
					dy,
					dw,
					dh
				);
				o.callback(canvas.toDataURL("image/jpeg", 0.1));
			}
		}
	}
})(jQuery);