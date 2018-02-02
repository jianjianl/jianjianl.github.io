//commonjs模块化支持
fis.hook('commonjs', {
    extList: ['.js', '.ts', '.vue']
});

fis.match('/node_modules/**.js', {
    isMod: true,
    useSameNameRequire: true
});

fis.match('*.js', {
    rExt: 'js',
    parser: fis.plugin('babel-5.x', {},{
        presets: ["es2015", "stage-0"]
    })
});
fis.match('**.vue:scss', {
    rExt: '.less',
    parser: fis.plugin('node-sass', {})
});

fis.match('/component/(**).vue', {
    isMod: true,
	parser: [
		fis.plugin('vue-component', {
            runtimeOnly: true
        }), 
		fis.plugin('babel-5.x', {},{
            presets: ["es2015", "stage-2"]
        }),

	],
	rExt: '.js',
	isJsLike: true,
	isMod: true,
	useSameNameRequire: true
});

fis.match('*.js', {
    isMod: true
  });

fis.match('/common/lib/**.js', {
    parser: null,
    isMod: false
});

fis.match('::package', {
    postpackager: fis.plugin('loader',{
        // allInOne: false
    })
});

// 禁用components
fis.unhook('components');
fis.hook('node_modules');