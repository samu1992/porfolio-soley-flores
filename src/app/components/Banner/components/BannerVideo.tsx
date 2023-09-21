'use client'
export default function BannerVideo() {
    return (
        <>
            <section className="container-video">
                <video  autoPlay loop muted id="banner-video">
                    <source src='./videoBanner.mp4' type="video/mp4" />
                </video>
            </section>
        </>
    )
}