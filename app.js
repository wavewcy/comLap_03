const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req,res) => {
    console.log(req.url);
    if(req.url === '/'){

        fs.readFile(path.join('index.html'), (err,content) => {
            if(err) throw err;
            res.writeHead(200, { 'content-type': 'text/html' });
            res.end(content);
        })

    }if(req.url === '/index.html'){

        fs.readFile(path.join('index.html'), (err,content) => {
            if(err) throw err;
            res.writeHead(200, { 'content-type': 'text/html' });
            res.end(content);
        })

    }else if (req.url === '/about.html'){

        fs.readFile(path.join('about.html'), (err,content) => {
            if(err) throw err;
            res.writeHead(200, { 'content-type': 'text/html' });
            res.end(content);
        })

    }else if (req.url === '/photography.html'){

        fs.readFile(path.join('photography.html'), (err,content) => {
            if(err) throw err;
            res.writeHead(200, { 'content-type': 'text/html' });
            res.end(content);
        })

    }else if (req.url === '/contact.html'){

        fs.readFile(path.join('contact.html'), (err,content) => {
            if(err) throw err;
            res.writeHead(200, { 'content-type': 'text/html' });
            res.end(content);
        })

    }else if(req.url === '/css/style.css'){

        fs.readFile(path.join(__dirname,'css', 'style.css'), (err,content) => {
            if(err) throw err;
            res.writeHead(200, { 'content-type': 'text/css' });
            res.end(content);
        })

    }else if(req.url === '/css/animate.css'){

        fs.readFile(path.join(__dirname,'css', 'animate.css'), (err,content) => {
            if(err) throw err;
            res.writeHead(200, { 'content-type': 'text/css' });
            res.end(content);
        })

    }else if(req.url === '/css/open-iconic-bootstrap.min.css'){

        fs.readFile(path.join(__dirname,'css', 'open-iconic-bootstrap.min.css'), (err,content) => {
            if(err) throw err;
            res.writeHead(200, { 'content-type': 'text/css' });
            res.end(content);
        })

    }else if(req.url === '/css/aos.css'){

        fs.readFile(path.join(__dirname,'css', 'aos.css'), (err,content) => {
            if(err) throw err;
            res.writeHead(200, { 'content-type': 'text/css' });
            res.end(content);
        })

    }else if(req.url === '/css/bootstrap-datepicker.css'){

        fs.readFile(path.join(__dirname,'css', 'bootstrap-datepicker.css'), (err,content) => {
            if(err) throw err;
            res.writeHead(200, { 'content-type': 'text/css' });
            res.end(content);
        })

    }else if(req.url === '/css/bootstrap.min.css'){

        fs.readFile(path.join(__dirname,'css', 'bootstrap.min.css'), (err,content) => {
            if(err) throw err;
            res.writeHead(200, { 'content-type': 'text/css' });
            res.end(content);
        })

    }else if(req.url === '/css/flaticon.css'){

        fs.readFile(path.join(__dirname,'css', 'flaticon.css'), (err,content) => {
            if(err) throw err;
            res.writeHead(200, { 'content-type': 'text/css' });
            res.end(content);
        })

    }else if(req.url === '/css/icomoon.css'){

        fs.readFile(path.join(__dirname,'css', 'icomoon.css'), (err,content) => {
            if(err) throw err;
            res.writeHead(200, { 'content-type': 'text/css' });
            res.end(content);
        })

    }else if(req.url === '/css/ionicons.min.css'){

        fs.readFile(path.join(__dirname,'css', 'ionicons.min.css'), (err,content) => {
            if(err) throw err;
            res.writeHead(200, { 'content-type': 'text/css' });
            res.end(content);
        })

    }else if(req.url === '/css/jquery.timepicker.css'){

        fs.readFile(path.join(__dirname,'css', 'jquery.timepicker.css'), (err,content) => {
            if(err) throw err;
            res.writeHead(200, { 'content-type': 'text/css' });
            res.end(content);
        })

    }else if(req.url === '/css/magnific-popup.css'){

        fs.readFile(path.join(__dirname,'css', 'magnific-popup.css'), (err,content) => {
            if(err) throw err;
            res.writeHead(200, { 'content-type': 'text/css' });
            res.end(content);
        })

    }else if(req.url === '/css/owl.carousel.min.css'){

        fs.readFile(path.join(__dirname,'css', 'owl.carousel.min.css'), (err,content) => {
            if(err) throw err;
            res.writeHead(200, { 'content-type': 'text/css' });
            res.end(content);
        })

    }else if(req.url === '/css/owl.theme.default.min.css'){

        fs.readFile(path.join(__dirname,'css', 'owl.theme.default.min.css'), (err,content) => {
            if(err) throw err;
            res.writeHead(200, { 'content-type': 'text/css' });
            res.end(content);
        })

    }else if(req.url === '/css/bootstrap/bootstrap-grid.css'){

        fs.readFile(path.join(__dirname,'css','bootstrap', 'bootstrap-grid.css'), (err,content) => {
            if(err) throw err;
            res.writeHead(200, { 'content-type': 'text/css' });
            res.end(content);
        })

    }else if(req.url === '/css/bootstrap/bootstrap-reboot.css'){

        fs.readFile(path.join(__dirname,'css','bootstrap', 'bootstrap-reboot.css'), (err,content) => {
            if(err) throw err;
            res.writeHead(200, { 'content-type': 'text/css' });
            res.end(content);
        })

    }else if(req.url === '/css/css/bootstrap-reboot.css'){

        fs.readFile(path.join(__dirname,'css','css', 'bootstrap-reboot.css'), (err,content) => {
            if(err) throw err;
            res.writeHead(200, { 'content-type': 'text/css' });
            res.end(content);
        })

    }else if(req.url === '/css/css/mixins/_text-hide.css'){

        fs.readFile(path.join(__dirname,'css','css','mixins', '_text-hide.css'), (err,content) => {
            if(err) throw err;
            res.writeHead(200, { 'content-type': 'text/css' });
            res.end(content);
        })

    }else if(req.url === '/fonts/flaticon/font/flaticon.css'){

        fs.readFile(path.join(__dirname,'fonts','flaticon','font', 'flaticon.css'), (err,content) => {
            if(err) throw err;
            res.writeHead(200, { 'content-type': 'text/css' });
            res.end(content);
        })

    }else if(req.url === '/fonts/flaticon/font/flaticon.html'){

        fs.readFile(path.join(__dirname,'fonts','flaticon','font', 'flaticon.html'), (err,content) => {
            if(err) throw err;
            res.writeHead(200, { 'content-type': 'text/html' });
            res.end(content);
        })

    }else if(req.url === '/fonts/ionicons/css/ionicons.min.css'){

        fs.readFile(path.join(__dirname,'fonts','ionicons','css', 'ionicons.min.css'), (err,content) => {
            if(err) throw err;
            res.writeHead(200, { 'content-type': 'text/css' });
            res.end(content);
        })

    }else if(req.url === '/css/jquery.timepicker.css'){

        fs.readFile(path.join(__dirname,'css','jquery.timepicker.css'), (err,content) => {
            if(err) throw err;
            res.writeHead(200, { 'content-type': 'text/css' });
            res.end(content);
        })

    }else if(req.url === '/fonts/icomoon/icomoon.woff'){

        fs.readFile(path.join(__dirname,'fonts','','icomoon','icomoon.woff'), (err,content) => {
            if(err) throw err;
            res.writeHead(200, { 'content-type': 'font/woff' });
            res.end(content);
        })

    }else if(req.url === '/fonts/icomoon/icomoon.ttf'){

        fs.readFile(path.join(__dirname,'fonts','','icomoon','icomoon.ttf'), (err,content) => {
            if(err) throw err;
            res.writeHead(200, { 'content-type': 'font/ttf' });
            res.end(content);
        })

    }else if(req.url === '/fonts/ionicons/fonts/ionicons.woff'){

        fs.readFile(path.join(__dirname,'fonts','ionicons','fonts','ionicons.woff'), (err,content) => {
            if(err) throw err;
            res.writeHead(200, { 'content-type': 'font/woff' });
            res.end(content);
        })

    }else if(req.url === '/fonts/ionicons/fonts/ionicons.ttf'){

        fs.readFile(path.join(__dirname,'fonts','ionicons','fonts','ionicons.ttf'), (err,content) => {
            if(err) throw err;
            res.writeHead(200, { 'content-type': 'font/ttf' });
            res.end(content);
        })

    }else if(req.url === '/images/author.jpg'){

        fs.readFile(path.join(__dirname,'images', 'author.jpg'), (err,content) => {
            if(err) throw err;
            res.writeHead(200, { 'content-type': 'image/jpg' });
            res.end(content);
        })

    }else if(req.url === '/images/bg_1.jpg'){

        fs.readFile(path.join(__dirname,'images', 'bg_1.jpg'), (err,content) => {
            if(err) throw err;
            res.writeHead(200, { 'content-type': 'image/jpg' });
            res.end(content);
        })

    }else if(req.url === '/images/bg_4.jpg'){

        fs.readFile(path.join(__dirname,'images', 'bg_4.jpg'), (err,content) => {
            if(err) throw err;
            res.writeHead(200, { 'content-type': 'image/jpg' });
            res.end(content);
        })

    }else if(req.url === '/images/image_1.jpg'){

        fs.readFile(path.join(__dirname,'images', 'image_1.jpg'), (err,content) => {
            if(err) throw err;
            res.writeHead(200, { 'content-type': 'image/jpg' });
            res.end(content);
        })

    }else if(req.url === '/images/image_2.jpg'){

        fs.readFile(path.join(__dirname,'images', 'image_2.jpg'), (err,content) => {
            if(err) throw err;
            res.writeHead(200, { 'content-type': 'image/jpg' });
            res.end(content);
        })

    }else if(req.url === '/images/image_3.jpg'){

        fs.readFile(path.join(__dirname,'images', 'image_3.jpg'), (err,content) => {
            if(err) throw err;
            res.writeHead(200, { 'content-type': 'image/jpg' });
            res.end(content);
        })

    }else if(req.url === '/images/image_4.jpg'){

        fs.readFile(path.join(__dirname,'images', 'image_4.jpg'), (err,content) => {
            if(err) throw err;
            res.writeHead(200, { 'content-type': 'image/jpg' });
            res.end(content);
        })

    }else if(req.url === '/images/image_5.jpg'){

        fs.readFile(path.join(__dirname,'images', 'image_5.jpg'), (err,content) => {
            if(err) throw err;
            res.writeHead(200, { 'content-type': 'image/jpg' });
            res.end(content);
        })

    }else if(req.url === '/images/image_6.jpg'){

        fs.readFile(path.join(__dirname,'images', 'image_6.jpg'), (err,content) => {
            if(err) throw err;
            res.writeHead(200, { 'content-type': 'image/jpg' });
            res.end(content);
        })

    }else if(req.url === '/images/image_7.jpg'){

        fs.readFile(path.join(__dirname,'images', 'image_7.jpg'), (err,content) => {
            if(err) throw err;
            res.writeHead(200, { 'content-type': 'image/jpg' });
            res.end(content);
        })

    }else if(req.url === '/images/image_8.jpg'){

        fs.readFile(path.join(__dirname,'images', 'image_8.jpg'), (err,content) => {
            if(err) throw err;
            res.writeHead(200, { 'content-type': 'image/jpg' });
            res.end(content);
        })

    }else if(req.url === '/images/image_9.jpg'){

        fs.readFile(path.join(__dirname,'images', 'image_9.jpg'), (err,content) => {
            if(err) throw err;
            res.writeHead(200, { 'content-type': 'image/jpg' });
            res.end(content);
        })

    }else if(req.url === '/images/image_10.jpg'){

        fs.readFile(path.join(__dirname,'images', 'image_10.jpg'), (err,content) => {
            if(err) throw err;
            res.writeHead(200, { 'content-type': 'image/jpg' });
            res.end(content);
        })

    }else if(req.url === '/images/image_11.jpg'){

        fs.readFile(path.join(__dirname,'images', 'image_11.jpg'), (err,content) => {
            if(err) throw err;
            res.writeHead(200, { 'content-type': 'image/jpg' });
            res.end(content);
        })

    }else if(req.url === '/images/image_12.jpg'){

        fs.readFile(path.join(__dirname,'images', 'image_12.jpg'), (err,content) => {
            if(err) throw err;
            res.writeHead(200, { 'content-type': 'image/jpg' });
            res.end(content);
        })

    }else if(req.url === '/images/loc.png'){

        fs.readFile(path.join(__dirname,'images', 'loc.png'), (err,content) => {
            if(err) throw err;
            res.writeHead(200, { 'content-type': 'image/png' });
            res.end(content);
        })

    }else if(req.url === '/main.js'){

        fs.readFile(path.join('main.js'), (err,content) => {
            if(err) throw err;
            res.writeHead(200, { 'content-type': 'text/javascript' });
            res.end(content);
        })

    }else if(req.url === '/js/aos.js'){

        fs.readFile(path.join(__dirname,'js','aos.js'), (err,content) => {
            if(err) throw err;
            res.writeHead(200, { 'content-type': 'text/javascript' });
            res.end(content);
        })

    }else if(req.url === '/js/bootstrap-datepicker.js'){

        fs.readFile(path.join(__dirname,'js','bootstrap-datepicker.js'), (err,content) => {
            if(err) throw err;
            res.writeHead(200, { 'content-type': 'text/javascript' });
            res.end(content);
        })

    }else if(req.url === '/js/bootstrap.min.js'){

        fs.readFile(path.join(__dirname,'js','bootstrap.min.js'), (err,content) => {
            if(err) throw err;
            res.writeHead(200, { 'content-type': 'text/javascript' });
            res.end(content);
        })

    }else if(req.url === '/js/jquery-3.2.1.min.js'){

        fs.readFile(path.join(__dirname,'js','jquery-3.2.1.min.js'), (err,content) => {
            if(err) throw err;
            res.writeHead(200, { 'content-type': 'text/javascript' });
            res.end(content);
        })

    }else if(req.url === '/js/jquery-migrate-3.0.1.min.js'){

        fs.readFile(path.join(__dirname,'js','jquery-migrate-3.0.1.min.js'), (err,content) => {
            if(err) throw err;
            res.writeHead(200, { 'content-type': 'text/javascript' });
            res.end(content);
        })

    }else if(req.url === '/js/jquery.animateNumber.min.js'){

        fs.readFile(path.join(__dirname,'js','jquery.animateNumber.min.js'), (err,content) => {
            if(err) throw err;
            res.writeHead(200, { 'content-type': 'text/javascript' });
            res.end(content);
        })

    }else if(req.url === '/js/jquery.easing.1.3.js'){

        fs.readFile(path.join(__dirname,'js','jquery.easing.1.3.js'), (err,content) => {
            if(err) throw err;
            res.writeHead(200, { 'content-type': 'text/javascript' });
            res.end(content);
        })

    }else if(req.url === '/js/jquery.magnific-popup.min.js'){

        fs.readFile(path.join(__dirname,'js','jquery.magnific-popup.min.js'), (err,content) => {
            if(err) throw err;
            res.writeHead(200, { 'content-type': 'text/javascript' });
            res.end(content);
        })

    }else if(req.url === '/js/jquery.min.js'){

        fs.readFile(path.join(__dirname,'js','jquery.min.js'), (err,content) => {
            if(err) throw err;
            res.writeHead(200, { 'content-type': 'text/javascript' });
            res.end(content);
        })

    }else if(req.url === '/js/jquery.stellar.min.js'){

        fs.readFile(path.join(__dirname,'js','jquery.stellar.min.js'), (err,content) => {
            if(err) throw err;
            res.writeHead(200, { 'content-type': 'text/javascript' });
            res.end(content);
        })

    }else if(req.url === '/js/jquery.waypoints.min.js'){

        fs.readFile(path.join(__dirname,'js','jquery.waypoints.min.js'), (err,content) => {
            if(err) throw err;
            res.writeHead(200, { 'content-type': 'text/javascript' });
            res.end(content);
        })

    }else if(req.url === '/js/main.js'){

        fs.readFile(path.join(__dirname,'js','main.js'), (err,content) => {
            if(err) throw err;
            res.writeHead(200, { 'content-type': 'text/javascript' });
            res.end(content);
        })

    }else if(req.url === '/js/owl.carousel.min.js'){

        fs.readFile(path.join(__dirname,'js','owl.carousel.min.js'), (err,content) => {
            if(err) throw err;
            res.writeHead(200, { 'content-type': 'text/javascript' });
            res.end(content);
        })

    }else if(req.url === '/js/popper.min.js'){

        fs.readFile(path.join(__dirname,'js','popper.min.js'), (err,content) => {
            if(err) throw err;
            res.writeHead(200, { 'content-type': 'text/javascript' });
            res.end(content);
        })

    }else if(req.url === '/js/range.js'){

        fs.readFile(path.join(__dirname,'js','range.js'), (err,content) => {
            if(err) throw err;
            res.writeHead(200, { 'content-type': 'text/javascript' });
            res.end(content);
        })

    }else if(req.url === '/js/scrollax.min.js'){

        fs.readFile(path.join(__dirname,'js','scrollax.min.js'), (err,content) => {
            if(err) throw err;
            res.writeHead(200, { 'content-type': 'text/javascript' });
            res.end(content);
        })

    }else{

        fs.readFile(path.join('404.html'), (err,content) => {
            if(err) throw err;
            res.writeHead(404, { 'content-type': 'text/html' });
            res.end(content);
        })
    }

});

const PORT = process.env.PORT || 5000;
server.listen(PORT,() => {
    console.log('Server is running on port:' +PORT);
});