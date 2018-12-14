

/**参数说明
		type:String				请求的类型，默认post
		url:String				请求地址
		time:String				超时时间
		data:Object				请求参数
		dataType:String			预期服务器返回的数据类型，xml html json ...
		headers:Object			自定义请求headers
		success:Function		请求成功后，这里会有两个参数,服务器返回数据，返回状态，[data, res]
		error:Function			请求失败后，这里会有两个参数,服务器返回数据，返回状态，[res]
		return
	**/

	function ajax (opt){

		const opts = opt || {};

		if (!opts.url) {
			alert('请填写接口地址');
			return false;
		}

		axios({
			method: opts.type || 'post',
			url: opts.url,
			params: opts.data || {},
			headers: opts.headers || {
			  	'Content-Type':'application/x-www-form-urlencoded'
			},
			baseURL:'https://www.cslapp.com',// `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。它可以通过设置一个 `baseURL` 便于为 axios 实例的方法传递相对 URL
			timeout: opts.time || 10*1000,
			responseType: opts.dataType || 'json'
		}).then(function(res){

			if(res.status === 200 ){

				if(opts.success){
					opts.success(res.data,res);
				}

			}else{

				if (data.error) {
					opts.error(error);
				}else{
					console.log(data)
				}

			}

		}).catch(function (error){
			if (opts.error) {
				opts.error(error);
			}else{
                console.log(error);
            }
		});
	}