// Gsap Js
gsap.registerPlugin(TextPlugin)
gsap.to('.lead', {
    duration: 2,
    delay: 1.5,
    text: 'Polytechnic Student'
})
// gsap.from('.jumbotron img', {
//   duration: 1,
//   rotateY: 360,
//   opacity: 0,
// })
gsap.from('.navbar', {
    duration: 1.5,
    y: '-100%',
    opacity: 0,
    ease: 'bounce'
})
gsap.from('.display-4', {
    duration: 1,
    x: -50,
    opacity: 0,
    delay: 0.5,
    ease: 'back'
})


// // Contact Form JS
// const scriptURL =
//     'https://script.google.com/macros/s/AKfycbw12CA-DsCvuyVlLPlNZizHfax065EUV_cJKN40sCllLCcVQKXxI2q8rbat5yslIskiKg/exec'
// const form = document.forms['github-contact-form']
// const btnKirim = document.querySelector('.btn-kirim')
// const btnLoading = document.querySelector('.btn-loading')
// const formAlert = document.querySelector('.form-alert')

// form.addEventListener('submit', e => {
//     e.preventDefault()
//     // ketika tombol submit diklik
//     // tampilkan tombol loading, hilangkan tombol kirim
//     btnLoading.classList.toggle('d-none')
//     btnKirim.classList.toggle('d-none')

//     fetch(scriptURL, {
//         method: 'POST',
//         body: new FormData(form)
//     })
//         .then(response => {
//             // tampilkan tombol kirim, hilangkan tombol loading
//             btnLoading.classList.toggle('d-none')
//             btnKirim.classList.toggle('d-none')
//             // tampilkan alert
//             formAlert.classList.toggle('d-none')
//             // reset form
//             form.reset()

//             console.log('Success!', response)
//         })
//         .catch(error => console.error('Error!', error.message))
// })
