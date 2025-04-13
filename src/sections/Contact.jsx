import TitleHeader from '../components/TitleHeader.jsx'
import ContactExperience from "../components/models/contact/ContactExperience.jsx";

const Contact = () => {

    const handleSubmit = () => {
    }
    const handleOnchange = () => {
    }
    return (
        <section className={'flex-center section-padding'} id={'contact'}>
            <div className={'w-full h-full md:px-10 px-5'}>
                <TitleHeader
                    title={"Get in Touch With Me"}
                    sub={"📧Contact information"}
                />
                <div className={'mt-16 grid-12-cols'}>
                    {/* Left side */}
                    <div className={'xl:col-span-5'}>
                        <div className={'flex-center card-border rounded-xl p-10 '}>
                            <form onSubmit={handleSubmit} className={'w-full flex flex-col gap-7'}>
                                <div>
                                    <label htmlFor={'name'}>Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name={'name'}
                                        placeholder={'Your name'}
                                        // value={formData.name}
                                        onChange={handleOnchange}
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor={'email'}>Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name={'email'}
                                        placeholder={'Your email address'}
                                        // value={formData.email}
                                        onChange={handleOnchange}
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor={'message'}>Message</label>
                                    <textarea
                                        id="message"
                                        rows="5"
                                        name={'message'}
                                        placeholder={'Your message'}
                                        // value={formData.message}
                                        onChange={handleOnchange}
                                        required
                                    ></textarea>
                                </div>

                                <button type="submit">
                                    <div className={'cta-button group'}>
                                        <div className={'bg-circle'}/>
                                        <p className={'text'}>Send Message</p>
                                        <div className={'arrow-wrapper'}>
                                            <img src={'/images/arrow-down.svg'} alt={'arrow'}/>
                                        </div>
                                    </div>
                                </button>
                            </form>
                        </div>
                    </div>
                    {/* Right side*/}
                    <div className={'xl:col-span-7 min-h-96'}>
                        <div className={'w-full h-full bg-[#cd7c2e] hover:cursor-grab rounded-3xl overflow-hidden'}>
                            <ContactExperience/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Contact
