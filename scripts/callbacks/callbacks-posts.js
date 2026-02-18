/* */

const posts = [
    {title: "Post one", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed venenatis massa. Suspendisse sagittis erat in ante gravida, vel bibendum justo finibus. Praesent convallis vel purus rhoncus rhoncus. Cras varius feugiat felis at iaculis. Phasellus maximus malesuada tristique. Maecenas finibus tempus ornare. Phasellus posuere ullamcorper sodales. Nulla vel odio eget enim faucibus efficitur at et tortor. Etiam vulputate sapien nisl. Etiam non rhoncus ipsum."},
    {title: "Post two", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed venenatis massa. Suspendisse sagittis erat in ante gravida, vel bibendum justo finibus. Praesent convallis vel purus rhoncus rhoncus. Cras varius feugiat felis at iaculis. Phasellus maximus malesuada tristique. Maecenas finibus tempus ornare. Phasellus posuere ullamcorper sodales. Nulla vel odio eget enim faucibus efficitur at et tortor. Etiam vulputate sapien nisl. Etiam non rhoncus ipsum."},
    {title: "Post three", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed venenatis massa. Suspendisse sagittis erat in ante gravida, vel bibendum justo finibus. Praesent convallis vel purus rhoncus rhoncus. Cras varius feugiat felis at iaculis. Phasellus maximus malesuada tristique. Maecenas finibus tempus ornare. Phasellus posuere ullamcorper sodales. Nulla vel odio eget enim faucibus efficitur at et tortor. Etiam vulputate sapien nisl. Etiam non rhoncus ipsum."},
    {title: "Post four", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed venenatis massa. Suspendisse sagittis erat in ante gravida, vel bibendum justo finibus. Praesent convallis vel purus rhoncus rhoncus. Cras varius feugiat felis at iaculis. Phasellus maximus malesuada tristique. Maecenas finibus tempus ornare. Phasellus posuere ullamcorper sodales. Nulla vel odio eget enim faucibus efficitur at et tortor. Etiam vulputate sapien nisl. Etiam non rhoncus ipsum."},
    {title: "Post five", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed venenatis massa. Suspendisse sagittis erat in ante gravida, vel bibendum justo finibus. Praesent convallis vel purus rhoncus rhoncus. Cras varius feugiat felis at iaculis. Phasellus maximus malesuada tristique. Maecenas finibus tempus ornare. Phasellus posuere ullamcorper sodales. Nulla vel odio eget enim faucibus efficitur at et tortor. Etiam vulputate sapien nisl. Etiam non rhoncus ipsum."},
]

const newPost = {title: "Post six", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed venenatis massa. Suspendisse sagittis erat in ante gravida, vel bibendum justo finibus. Praesent convallis vel purus rhoncus rhoncus. Cras varius feugiat felis at iaculis. Phasellus maximus malesuada tristique. Maecenas finibus tempus ornare. Phasellus posuere ullamcorper sodales. Nulla vel odio eget enim faucibus efficitur at et tortor. Etiam vulputate sapien nisl. Etiam non rhoncus ipsum."}

/**
 * About this example: we have two functions. The setTimeouts are 
 * used to mimic the style of delay you would get when returning posts 
 * from the server. The getPosts function, includes parameters for 
 * data as well as a parameter for a callback, which we use for updating posts.
 * With the callback function, the posts load in the correct order
 * (posts 1 - 5 load, followed by post 6). Without the callback 
 * post 6 will be the first post updated to the DOM, followed by the next 
 * posts. Callbacks help manage the order that your application calls
 * functions and the overall flow of your application. 
 * For example, once getPosts THEN updatePosts. This is useful for async 
 * requests (multiple things happenening at the same time).
 */
function callbackExample() {
    function getPosts(data, callback) {
        setTimeout(() => {
            for(i = 0; i < data.length; i++) {
                let articleElem = document.createElement("article");
                let titleElem = document.createElement("h1");
                let paraElem = document.createElement("p");
                titleElem.innerText = posts[i].title;
                paraElem.innerText = posts[i].body;
                articleElem.append(titleElem);
                articleElem.append(paraElem);
                document.body.append(articleElem);
                console.log(articleElem);
            }      
            callback();
        }, 2000);
    }

    function updatePosts() {
        console.log("update posts");
        setTimeout(() => {
            let articleElem = document.createElement("article");
            let titleElem = document.createElement("h1");
            let paraElem = document.createElement("p");
            titleElem.innerHTML = newPost.title;
            paraElem.innerHTML = newPost.body;
            articleElem.append(titleElem);
            articleElem.append(paraElem);
            document.body.append(articleElem);
            console.log(titleElem);
        }, 1000);
    }

    getPosts(posts, updatePosts);
    
}

callbackExample();