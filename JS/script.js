console.log('VUE-OK', Vue);

const { createApp } = Vue;

const app = createApp({
    name: 'Vue hello',
    data() {
        return {
            message: "Hello World!",
            img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fmedium.com%2Fappsflyerengineering%2Fhow-can-hello-world-program-effect-the-way-you-think-about-programing-3be5cefdaf8c&psig=AOvVaw2X103ocqeNQfefgD9BgksO&ust=1705760160427000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNCKxvbR6YMDFQAAAAAdAAAAABAJ"
        };
    }
});

app.mount('#root');
