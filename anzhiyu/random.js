var posts=["2023/02/19/第七篇文章/","2023/02/19/第三篇文章/","2023/02/19/第二篇文章/","2023/02/19/第九篇文章/","2023/02/19/第五篇文章/","2023/02/19/第六篇文章/","2023/05/18/第十一篇文章/","2023/02/19/第八篇文章/","2023/02/19/第十二篇文章/","2023/05/18/第十篇文章/","2023/02/19/第四篇文章/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};