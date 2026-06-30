const testimonials =[
    {
        name: "Kiniale Jonah",
        photoUrl: "https://images.unsplash.com/photo-1593990965215-075c1f918806?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "I love apple! This is an amazing service and it has saved me and my small business so much time. I plan to use it for a long time to come."
    },
    {
        name: "Charise G",
        photoUrl: "https://images.unsplash.com/photo-1474176857210-7287d38d27c6?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "Everyone’s on the same page. Many of our people are not very organized naturally, so Apple is a godsend!."
    },
    {
        name: "Muwanguzi Ibra",
        photoUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "I love Apple! This is an amazing service and it has saved me and my small business so much time. I plan to use it for a long time to come."
    },
    {
        name: "Dombo Nasser",
        photoUrl: "https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "I would recommend Apple for anyone trying to get the word out about their business. It has saved me so much time!"
    },
    {
        name: "Ssebagala Islam",
        photoUrl: "https://images.unsplash.com/photo-1640960543409-dbe56ccc30e2?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "We can't understand how we've been living without Apple."
    },
    {
        name: "Maido Salim",
        photoUrl: "https://plus.unsplash.com/premium_photo-1664541336896-b3d5f7dec9a3?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "Apple is a game-changer. Instead of drowning in an endless chain of emails, there is clear and easy accountability meaning tasks actually get done!"
    },
    {
        name: "Nakanyago Faima",
        photoUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "If you want to take your business to the next level, use Apple and don't look any further."
    },
    {
        name: "Nandy Haurat",
        photoUrl: "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "If you are a business owner, and you don't have Apple in your toolkit just yet, I highly recommend that you check it out."
    },
    {
        name: "Musene Eria",
        photoUrl: "https://images.unsplash.com/photo-1528892952291-009c663ce843?q=80&w=344&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "With Apple, communication between all of us is far more efficient. A game changer."
    },
    {
        name: "Namugoowa Rajab",
        photoUrl: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=848&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "I have been using Apple for over a year now and I love it! I can't imagine life without it. It's so easy to use, and the customer service is great."
    }
]
let idx = 0;

updateTestimonial();


function updateTestimonial(){
    const {name, photoUrl, text} = testimonials[idx];
    document.querySelector("img").src= photoUrl;
    document.querySelector(".text").innerText = text;
    document.querySelector(".username").innerText = name;

    idx++;
    if (idx===testimonials.length){
        idx=0;
    }
    setTimeout(updateTestimonial, 2000);
}