import finalCamp from "../assets/contact/final-camp.png";
export function ContactCamp() {

    return `

<section id="contact" class="contact">

    <div class="contact-left">

        <img
    src="${finalCamp}"
    alt="The Final Camp"
        >

    </div>

    <div class="contact-right">

        <p class="contact-small">
            THE FINAL DESTINATION
        </p>

        <h2>
            The Final Camp
        </h2>

        <p class="contact-description">

            Every great adventure ends with a new beginning.
            <br>
            Let's build the next one together.

        </p>

        <div class="contact-links">

            <a href="https://github.com/Pareekshith-M-Kumar" target="_blank">

                GitHub

            </a>

            <a href="https://www.linkedin.com/in/pareekshith-m-kumar-380181391/" target="_blank">

                LinkedIn

            </a>

            <a href="mailto:pareekshithmjayanthi@gmail.com">

                Email

            </a>

        </div>

        <form class="contact-form" action="https://formsubmit.co/pareekshithmjayanthi@gmail.com"
method="POST">
            <input type="hidden" name="_captcha" value="false">

<input type="hidden" name="_subject" value="Portfolio Contact">

<input type="hidden" name="_template" value="table">

            <input
type="text"
name="name"
placeholder="Your Name"
required>

            <input
type="email"
name="email"
placeholder="Your Email"
required>

            <textarea
name="message"
placeholder="Your Message"
required>
</textarea>
            <button type="submit">

                Send Raven

            </button>

        </form>

    </div>

</section>

`;

}