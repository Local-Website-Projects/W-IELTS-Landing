import React,{useEffect} from "react";

import Header from "../components/Header";

function Home() {
    return (
        <div>
            <div className="body_wrap">
                <Header/>
                <div className="body-overlay"></div>
                <main>
                    <section className="hero o-hidden pos-rel">
                        <div className="bg_img">
                            <div className="container">
                                <div className="hero__content-wrap text-center pt-55">
                                    <div className="section-title clr-white">
                                        <span className="sub-title wow fadeInUp" data-wow-delay="0ms"
                                              data-wow-duration=".6s">Welcome to University</span>
                                        <h1 className="title wow fadeInUp" data-wow-delay="150ms"
                                            data-wow-duration=".6s">Edubost University Your <br/> Pathway to Success
                                        </h1>
                                    </div>
                                    <div className="xb-hero-img">
                                        <img src="assets/img/hero/hero_img01.png" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="hero-btns">
                        <div className="btns ul_li_center">
                            <a className="thm-btn thm-btn--stroke-white sec-btn" href="courses.html">explore programs
                                <span><svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                           xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M22 4.84999V16.74C22 17.71 21.21 18.6 20.24 18.72L19.93 18.76C18.29 18.98 15.98 19.66 14.12 20.44C13.47 20.71 12.75 20.22 12.75 19.51V5.59999C12.75 5.22999 12.96 4.88999 13.29 4.70999C15.12 3.71999 17.89 2.83999 19.77 2.67999H19.83C21.03 2.67999 22 3.64999 22 4.84999Z"
                            fill="white"/>
                        <path
                            d="M10.71 4.70999C8.87999 3.71999 6.10999 2.83999 4.22999 2.67999H4.15999C2.95999 2.67999 1.98999 3.64999 1.98999 4.84999V16.74C1.98999 17.71 2.77999 18.6 3.74999 18.72L4.05999 18.76C5.69999 18.98 8.00999 19.66 9.86999 20.44C10.52 20.71 11.24 20.22 11.24 19.51V5.59999C11.24 5.21999 11.04 4.88999 10.71 4.70999ZM4.99999 7.73999H7.24999C7.65999 7.73999 7.99999 8.07999 7.99999 8.48999C7.99999 8.90999 7.65999 9.23999 7.24999 9.23999H4.99999C4.58999 9.23999 4.24999 8.90999 4.24999 8.48999C4.24999 8.07999 4.58999 7.73999 4.99999 7.73999ZM7.99999 12.24H4.99999C4.58999 12.24 4.24999 11.91 4.24999 11.49C4.24999 11.08 4.58999 10.74 4.99999 10.74H7.99999C8.40999 10.74 8.74999 11.08 8.74999 11.49C8.74999 11.91 8.40999 12.24 7.99999 12.24Z"
                            fill="white"/>
                      </svg></span>
                            </a>
                            <a className="thm-btn thm-btn--stroke-white sec-btn" href="contact.html">apply now
                                <span><svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                           xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M16.25 19.492V20.75C16.25 21.164 15.914 21.5 15.5 21.5C15.086 21.5 14.75 21.164 14.75 20.75V19.5H16C16.084 19.5 16.167 19.497 16.25 19.492Z"
                              fill="white"/>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M14.75 19.5H8C5.929 19.5 4.25 17.821 4.25 15.75V12.668L9.964 15.825C11.202 16.509 12.798 16.509 14.036 15.825L14.75 15.431V19.5ZM16.25 14.602L19.75 12.668V15.75C19.75 17.737 18.205 19.363 16.25 19.492V14.602Z"
                              fill="white"/>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M14.75 14.288L13.552 14.95C12.608 15.472 11.392 15.472 10.448 14.95L2.134 10.356C1.568 10.043 1.25 9.49499 1.25 8.92199C1.25 8.34799 1.568 7.79999 2.134 7.48799L10.448 2.89299C11.392 2.37199 12.608 2.37199 13.552 2.89299L21.866 7.48799C22.432 7.79999 22.75 8.34799 22.75 8.92199C22.75 9.49499 22.432 10.043 21.866 10.356L16.25 13.459V12.75C16.25 12.551 16.171 12.36 16.03 12.22L12.53 8.71999C12.238 8.42699 11.762 8.42699 11.47 8.71999C11.177 9.01199 11.177 9.48799 11.47 9.77999L14.75 13.061V14.288Z"
                              fill="white"/>
                      </svg></span>
                            </a>
                            <a className="thm-btn thm-btn--stroke-white sec-btn" href="contact.html">talk with a teacher
                                <span><svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                                           xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M13.0364 2.63798C11.6702 1.79536 10.0512 1.33203 8.37891 1.33203C3.82654 1.33203 0 4.72368 0 9.06641C0 10.589 0.473 12.0486 1.37148 13.3092L0.116359 17.2497C-0.0162422 17.6659 0.295539 18.0898 0.730598 18.0898C0.83007 18.0898 0.930188 18.0669 1.02257 18.0198L4.83957 16.0791C4.99413 16.1456 5.15062 16.2076 5.3087 16.265C4.42496 14.8857 3.95312 13.3023 3.95312 11.6445C3.95312 6.70755 8.10726 2.91208 13.0364 2.63798Z"
                            fill="white"/>
                        <path
                            d="M20.6285 15.8873C21.527 14.6267 22 13.1671 22 11.6445C22 7.30022 18.1718 3.91016 13.6211 3.91016C9.06873 3.91016 5.24219 7.30181 5.24219 11.6445C5.24219 15.9888 9.07036 19.3789 13.6211 19.3789C14.8421 19.3789 16.0588 19.1301 17.1602 18.6571L20.9774 20.598C21.2091 20.7158 21.4889 20.6829 21.6869 20.5146C21.885 20.3463 21.9626 20.0755 21.8837 19.8278L20.6285 15.8873ZM11 12.2891C10.644 12.2891 10.3555 12.0005 10.3555 11.6445C10.3555 11.2886 10.644 11 11 11C11.356 11 11.6445 11.2886 11.6445 11.6445C11.6445 12.0005 11.356 12.2891 11 12.2891ZM13.5781 12.2891C13.2222 12.2891 12.9336 12.0005 12.9336 11.6445C12.9336 11.2886 13.2222 11 13.5781 11C13.9341 11 14.2227 11.2886 14.2227 11.6445C14.2227 12.0005 13.9341 12.2891 13.5781 12.2891ZM16.1562 12.2891C15.8003 12.2891 15.5117 12.0005 15.5117 11.6445C15.5117 11.2886 15.8003 11 16.1562 11C16.5122 11 16.8008 11.2886 16.8008 11.6445C16.8008 12.0005 16.5122 12.2891 16.1562 12.2891Z"
                            fill="white"/>
                      </svg></span>
                            </a>
                        </div>
                    </div>
                    <section className="program pos-rel pt-115">
                        <div className="container">
                            <div className="pro-top ul_li_between mb-40">
                                <div className="section-title mb-20">
                                    <span className="sub-title">Our academics offerings</span>
                                    <h1 className="title">Top Programs</h1>
                                </div>
                                <div className="pro-btn mb-20">
                                    <a className="thm-btn thm-btn--stroke-black" href="courses.html">view all programs
                                        <span><svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                   xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M22 4.84993V16.7399C22 17.7099 21.21 18.5999 20.24 18.7199L19.93 18.7599C18.29 18.9799 15.98 19.6599 14.12 20.4399C13.47 20.7099 12.75 20.2199 12.75 19.5099V5.59993C12.75 5.22993 12.96 4.88993 13.29 4.70993C15.12 3.71993 17.89 2.83993 19.77 2.67993H19.83C21.03 2.67993 22 3.64993 22 4.84993Z"
                                    fill="#170006"/>
                                <path
                                    d="M10.71 4.70993C8.87999 3.71993 6.10999 2.83993 4.22999 2.67993H4.15999C2.95999 2.67993 1.98999 3.64993 1.98999 4.84993V16.7399C1.98999 17.7099 2.77999 18.5999 3.74999 18.7199L4.05999 18.7599C5.69999 18.9799 8.00999 19.6599 9.86999 20.4399C10.52 20.7099 11.24 20.2199 11.24 19.5099V5.59993C11.24 5.21993 11.04 4.88993 10.71 4.70993ZM4.99999 7.73993H7.24999C7.65999 7.73993 7.99999 8.07993 7.99999 8.48993C7.99999 8.90993 7.65999 9.23993 7.24999 9.23993H4.99999C4.58999 9.23993 4.24999 8.90993 4.24999 8.48993C4.24999 8.07993 4.58999 7.73993 4.99999 7.73993ZM7.99999 12.2399H4.99999C4.58999 12.2399 4.24999 11.9099 4.24999 11.4899C4.24999 11.0799 4.58999 10.7399 4.99999 10.7399H7.99999C8.40999 10.7399 8.74999 11.0799 8.74999 11.4899C8.74999 11.9099 8.40999 12.2399 7.99999 12.2399Z"
                                    fill="#170006"/>
                              </svg></span>
                                    </a>
                                </div>
                            </div>
                            <div className="row mt-none-60">
                                <div className="col-lg-4 col-md-6 mt-60">
                                    <div className="xb-program__wrapper">
                                        <div className="xb-item--img text-center">
                                            <a href="course-single.html"><img src="assets/img/program/pro-img01.png"
                                                                              alt=""/></a>
                                        </div>
                                        <div className="xb-item--holder">
                                            <div className="xb-item--deprt ul_li_between">
                                                <span className="xb-item--group"># Medical</span>
                                                <div className="xb-item--rating"><span>5.0</span> <img
                                                    src="assets/img/icon/rating.png" alt=""/></div>
                                            </div>
                                            <h2 className="xb-item--title border-effect-2"><a href="course-single.html">MBA
                                                in Biomedical Engineering..</a></h2>
                                            <ul className="xb-item--meta ul_li">
                                                <li><img src="assets/img/icon/meta-icon01.png" alt=""/>200 Seat</li>
                                                <li><img src="assets/img/icon/clock.png" alt=""/>14 Semester</li>
                                            </ul>
                                            <div className="xb-item--dep-btn">
                                                <a href="course-single.html">enroll now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mt-60">
                                    <div className="xb-program__wrapper">
                                        <div className="xb-item--img text-center">
                                            <a href="course-single.html"><img src="assets/img/program/pro-img02.png"
                                                                              alt=""/></a>
                                        </div>
                                        <div className="xb-item--holder">
                                            <div className="xb-item--deprt ul_li_between">
                                                <span className="xb-item--group"># Management</span>
                                                <div className="xb-item--rating"><span>4.5</span> <img
                                                    src="assets/img/icon/rating.png" alt=""/></div>
                                            </div>
                                            <h2 className="xb-item--title border-effect-2"><a href="course-single.html">MBA
                                                in Advanced Construction..</a></h2>
                                            <ul className="xb-item--meta ul_li">
                                                <li><img src="assets/img/icon/meta-icon01.png" alt=""/>250 Seat</li>
                                                <li><img src="assets/img/icon/clock.png" alt=""/>14 Semester</li>
                                            </ul>
                                            <div className="xb-item--dep-btn">
                                                <a href="course-single.html">enroll now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mt-60">
                                    <div className="xb-program__wrapper">
                                        <div className="xb-item--img text-center">
                                            <a href="course-single.html"><img src="assets/img/program/pro-img03.png"
                                                                              alt=""/></a>
                                        </div>
                                        <div className="xb-item--holder">
                                            <div className="xb-item--deprt ul_li_between">
                                                <span className="xb-item--group"># Construction</span>
                                                <div className="xb-item--rating"><span>5.0</span> <img
                                                    src="assets/img/icon/rating.png" alt=""/></div>
                                            </div>
                                            <h2 className="xb-item--title border-effect-2"><a href="course-single.html">MBA
                                                in Management and Strategic..</a></h2>
                                            <ul className="xb-item--meta ul_li">
                                                <li><img src="assets/img/icon/meta-icon01.png" alt=""/>280 Seat</li>
                                                <li><img src="assets/img/icon/clock.png" alt=""/>14 Semester</li>
                                            </ul>
                                            <div className="xb-item--dep-btn">
                                                <a href="course-single.html">enroll now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mt-60">
                                    <div className="xb-program__wrapper">
                                        <div className="xb-item--img text-center">
                                            <a href="course-single.html"><img src="assets/img/program/pro-img04.png"
                                                                              alt=""/></a>
                                        </div>
                                        <div className="xb-item--holder">
                                            <div className="xb-item--deprt ul_li_between">
                                                <span className="xb-item--group"># Engineering</span>
                                                <div className="xb-item--rating"><span>5.0</span> <img
                                                    src="assets/img/icon/rating.png" alt=""/></div>
                                            </div>
                                            <h2 className="xb-item--title border-effect-2"><a href="course-single.html">MBA
                                                in Mechanical Engineering..</a></h2>
                                            <ul className="xb-item--meta ul_li">
                                                <li><img src="assets/img/icon/meta-icon01.png" alt=""/>220 Seat</li>
                                                <li><img src="assets/img/icon/clock.png" alt=""/>14 Semester</li>
                                            </ul>
                                            <div className="xb-item--dep-btn">
                                                <a href="course-single.html">enroll now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mt-60">
                                    <div className="xb-program__wrapper">
                                        <div className="xb-item--img text-center">
                                            <a href="course-single.html"><img src="assets/img/program/pro-img05.png"
                                                                              alt=""/></a>
                                        </div>
                                        <div className="xb-item--holder">
                                            <div className="xb-item--deprt ul_li_between">
                                                <span className="xb-item--group"># Energy</span>
                                                <div className="xb-item--rating"><span>5.0</span> <img
                                                    src="assets/img/icon/rating.png" alt=""/></div>
                                            </div>
                                            <h2 className="xb-item--title border-effect-2"><a href="course-single.html">MBA
                                                in Sustainable Energy..</a></h2>
                                            <ul className="xb-item--meta ul_li">
                                                <li><img src="assets/img/icon/meta-icon01.png" alt=""/>200 Seat</li>
                                                <li><img src="assets/img/icon/clock.png" alt=""/>14 Semester</li>
                                            </ul>
                                            <div className="xb-item--dep-btn">
                                                <a href="course-single.html">enroll now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mt-60">
                                    <div className="xb-program__wrapper">
                                        <div className="xb-item--img text-center">
                                            <a href="course-single.html"><img src="assets/img/program/pro-img06.png"
                                                                              alt=""/></a>
                                        </div>
                                        <div className="xb-item--holder">
                                            <div className="xb-item--deprt ul_li_between">
                                                <span className="xb-item--group"># Real Estate</span>
                                                <div className="xb-item--rating"><span>4.9</span> <img
                                                    src="assets/img/icon/rating.png" alt=""/></div>
                                            </div>
                                            <h2 className="xb-item--title border-effect-2"><a href="course-single.html">MBA
                                                in Real Estate and Urban..</a></h2>
                                            <ul className="xb-item--meta ul_li">
                                                <li><img src="assets/img/icon/meta-icon01.png" alt=""/>230 Seat</li>
                                                <li><img src="assets/img/icon/clock.png" alt=""/>14 Semester</li>
                                            </ul>
                                            <div className="xb-item--dep-btn">
                                                <a href="course-single.html">enroll now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="blog pt-115 pb-120 bg_img" data-background="assets/img/bg/news_bg01.jpg">
                        <div className="container">
                            <div className="blog-sec-top ul_li_between">
                                <div className="section-title mb-40">
                                    <span className="sub-title">Latest News</span>
                                    <h1 className="title">Campus News</h1>
                                </div>
                                <div className="xb-topic">
                                    <select name="Topic" id="seelct">
                                        <option value="1">Topic</option>
                                        <option value="2">Arts, Humanities, & Social Sciences</option>
                                        <option value="3">Campus & Community</option>
                                        <option value="4">Education, Business, & Law</option>
                                        <option value="5">Health Sciences</option>
                                        <option value="5">Science & Technology</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-lg-3 col-md-8">
                                    <div className="xb-blog__left">
                                        <div className="xb-blog pos-rel mt-20">
                                            <div className="xb-item--img">
                                                <a href="#!"><img src="assets/img/blog/blog-img01.png" alt=""/>a</a>
                                            </div>
                                            <div className="xb-item--holder">
                                                <a className="xb-item--cta" href="#!">#Study</a>
                                                <h2 className="xb-item--title border-effect-2"><a
                                                    href="blog-single.html">EduFord University Hosts International on
                                                    Climate..</a></h2>
                                            </div>
                                        </div>
                                        <div className="xb-blog pos-rel mt-20">
                                            <div className="xb-item--img">
                                                <a href="#!"><img src="assets/img/blog/blog-img02.png" alt=""/></a>
                                            </div>
                                            <div className="xb-item--holder">
                                                <a className="xb-item--cta" href="#!">#Membership</a>
                                                <h2 className="xb-item--title border-effect-2"><a
                                                    href="blog-single.html">Thirty-one UChicago faculty members receive
                                                    named..</a></h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-8">
                                    <div className="xb-blog chn-margin pos-rel mt-20">
                                        <div className="xb-item--img">
                                            <a href="#!"><img src="assets/img/blog/blog-img03.png" alt=""/></a>
                                        </div>
                                        <div className="xb-item--holder">
                                            <a className="xb-item--cta" href="#!">#Study programs</a>
                                            <h2 className="xb-item--title border-effect"><a href="blog-single.html">EduFord
                                                University Receives Grant for <br/> Advanced STEM Programs..</a></h2>
                                            <div className="xb-item--meta ul_li">
                                                <span><i className="far fa-user"></i>Louis Saville</span>
                                                <span><i className="far fa-clock"></i>2023/10/15</span>
                                                <span><i className="far fa-comment"></i>15</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-8">
                                    <div className="xb-blog__right">
                                        <div className="xb-blog mr-left pos-rel mt-20">
                                            <div className="xb-item--img">
                                                <a href="#!"><img src="assets/img/blog/blog-img04.png" alt=""/></a>
                                            </div>
                                            <div className="xb-item--holder">
                                                <a className="xb-item--cta" href="#!">#Awarded</a>
                                                <h2 className="xb-item--title border-effect-2"><a
                                                    href="blog-single.html">our Awarded National for Community
                                                    Outreach..</a></h2>
                                            </div>
                                        </div>
                                        <div className="xb-blog mr-left pos-rel mt-20">
                                            <div className="xb-item--img">
                                                <a href="#!"><img src="assets/img/blog/blog-img05.png" alt=""/></a>
                                            </div>
                                            <div className="xb-item--holder">
                                                <a className="xb-item--cta" href="#!">#Campus Life</a>
                                                <h2 className="xb-item--title border-effect-2"><a
                                                    href="blog-single.html">Expands Campus Facilities <br/> with State
                                                    of-the-Art Lab..</a></h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="xb-btn text-center pt-60">
                                <a className="thm-btn" href="blog.html">More Campus News
                                    <span className="icon"><svg width="21" height="21" viewBox="0 0 21 21" fill="none"
                                                                xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M10.4795 21C9.10959 21 7.81507 20.7539 6.59589 20.2617C5.37671 19.7695 4.30137 19.0962 3.36986 18.2417C2.43836 17.3872 1.67808 16.3857 1.08904 15.2373C0.486301 14.0752 0.123288 12.8311 0 11.5049V11.4639H8.56849V14.3145C8.56849 14.5742 8.66096 14.7998 8.84589 14.9912C9.03082 15.1826 9.25342 15.2783 9.5137 15.2783C9.65068 15.2783 9.7774 15.251 9.89384 15.1963C10.0103 15.1416 10.1096 15.0732 10.1918 14.9912L14.0137 11.1768C14.0959 11.0947 14.1644 10.9956 14.2192 10.8794C14.274 10.7632 14.3014 10.6367 14.3014 10.5C14.3014 10.3633 14.274 10.2368 14.2192 10.1206C14.1644 10.0044 14.0959 9.90527 14.0137 9.82324L10.1918 6.00879C10.1096 5.92676 10.0103 5.8584 9.89384 5.80371C9.7774 5.74902 9.65068 5.72168 9.5137 5.72168C9.25342 5.72168 9.0274 5.81738 8.83562 6.00879C8.64384 6.2002 8.54794 6.42578 8.54794 6.68555V9.53613H0C0.123288 8.19629 0.486301 6.94531 1.08904 5.7832C1.67808 4.62109 2.44178 3.61279 3.38014 2.7583C4.31849 1.90381 5.39041 1.23047 6.59589 0.738281C7.81507 0.246094 9.10959 0 10.4795 0C11.9315 0 13.2945 0.273439 14.5685 0.820312C15.8425 1.38086 16.9555 2.13623 17.9075 3.08643C18.8596 4.03662 19.6096 5.14746 20.1575 6.41895C20.7192 7.69043 21 9.05078 21 10.5C21 11.9492 20.7192 13.3096 20.1575 14.5811C19.6096 15.8662 18.8596 16.9839 17.9075 17.9341C16.9555 18.8843 15.8425 19.6328 14.5685 20.1797C13.2945 20.7266 11.9315 21 10.4795 21Z"
                                fill="#170006"/>
                          </svg></span>
                                </a>
                            </div>
                        </div>
                    </section>
                </main>

            </div>
        </div>
    )
}

export default Home;