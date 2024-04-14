import { useEffect } from "react";
import "./styles/Menu.sass";
import { scrolledPast } from "../utils/utils";

interface Props {
    callbacks: (() => void)[],
}

export default function Menu({ callbacks }: Props) {
    useEffect(() => {
        const freelance = document.getElementById("freelance-section")!;
        const projects = document.getElementById("projects-section")!;
        const contact = document.getElementById("contact-section")!;

        const wrapper = document.getElementById("wrapper")!;
        const indicator = document.getElementById("indicator")!;

        if (!(freelance && projects && contact && wrapper && indicator)) {
            console.error(freelance, projects, contact, wrapper, indicator);
        }

        const sections = [
            { element: contact, class: "contact" },
            { element: projects, class: "projects" },
            { element: freelance, class: "freelance" },
        ];

        function updateIndicator() {
            let section = "home";
            for (let i = 0; i < sections.length; i++) {
                if (scrolledPast(wrapper, sections[i].element)) {
                    section = sections[i].class;
                    break;
                }
            }

            indicator.classList.remove("home", "freelance", "projects", "contact");
            indicator.classList.add(section);
        }

        let throttlePause = false;
        function throttledCallback(callback: () => void, time: number) {
            if (throttlePause) return;
            throttlePause = true;

            setTimeout(() => {
                callback();
                throttlePause = false;
            }, time);
        };

        wrapper.addEventListener("scroll", () => throttledCallback(updateIndicator, 25));
    }, []);


    return (
        <section id="menu-container">
            <svg id="menu" width="536" height="106" viewBox="0 0 536 106" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="body-bg" fillRule="evenodd" clipRule="evenodd"
                    d="M104.637 57C102.756 67.2405 93.7843 75 83 75C70.8497 75 61 65.1503 61 53C61 40.8497 70.8497 31 83 31C93.7843 31 102.756 38.7595 104.637 49H180.363C182.244 38.7595 191.216 31 202 31C212.784 31 221.756 38.7595 223.637 49H300.257C302.138 38.7595 311.109 31 321.894 31L321.947 31.0001L322 31C332.784 31 341.756 38.7595 343.637 49H420.257C422.138 38.7595 431.109 31 441.894 31C454.044 31 463.894 40.8497 463.894 53C463.894 65.1503 454.044 75 441.894 75C431.109 75 422.138 67.2405 420.257 57H343.637C341.756 67.2405 332.784 75 322 75L321.947 74.9999L321.894 75C311.109 75 302.138 67.2405 300.257 57H223.637C221.756 67.2405 212.784 75 202 75C191.216 75 182.244 67.2405 180.363 57H104.637Z"
                    fill="white" stroke="white" strokeWidth="2" />

                <circle id="indicator" className="home" fill="url(#paint1_linear_14_9)" />
                <circle className="menu-btn" r="23" cx={83} cy={52} onClick={callbacks[0]} />
                <circle className="menu-btn" r="23" cx={202} cy={52} onClick={callbacks[1]} />
                <circle className="menu-btn" r="23" cx={322} cy={52} onClick={callbacks[2]} />
                <circle className="menu-btn" r="23" cx={442} cy={52} onClick={callbacks[3]} />

                <path fillRule="evenodd" clipRule="evenodd"
                    d="M246.549 16.5055C248.187 15.6744 249.992 14.7583 252.096 15.1883C250.411 17.6339 247.24 18.3133 244.069 18.9928C240.474 19.763 236.879 20.5332 235.45 23.8756C237.404 24.8547 239.493 24.2561 241.8 23.5953C244.056 22.9493 246.519 22.2439 249.265 22.8947C247.142 25.7191 243.07 26.229 238.999 26.739C234.642 27.2847 230.285 27.8304 228.315 31.212C229.675 31.481 231.615 31.6417 233.765 31.8197C237.158 32.1007 241.071 32.4247 244.036 33.2857C241.79 35.4753 237.285 34.9817 232.781 34.4881C227.976 33.9617 223.171 33.4352 221.107 36.1645C223.33 38.7958 225.018 41.8925 226.007 45.2876H297.993C301.021 34.8875 310.623 27.2875 322 27.2875C324.589 27.2875 327.086 27.6811 329.434 28.4115C337.407 30.8912 343.668 37.254 346.007 45.2875H358.246C357.585 42.865 356.086 40.7767 353.785 39.08C353.334 38.751 352.912 38.4529 352.805 38.4025L352.8 38.4001C352.795 38.3981 352.791 38.3966 352.788 38.3958C352.787 38.3956 352.786 38.3955 352.785 38.3956C350.707 37.0136 349.658 36.4736 348.004 35.8486L347.987 35.8337C347.978 35.8252 347.968 35.8168 347.957 35.8084C348.37 35.8084 351.069 36.4136 351.808 36.6767C352.785 37.0092 353.326 37.2611 354.283 37.738C356.638 38.9133 358.718 40.6675 359.801 42.3866L359.913 42.5624L360.087 42.8389C360.458 43.4261 360.594 43.6416 360.644 43.6365C360.673 43.6336 360.674 43.5582 360.675 43.4394C360.676 43.3999 360.676 43.3556 360.678 43.3076C360.695 42.7725 360.248 39.9658 360.025 39.0537C359.389 36.589 358.684 34.791 357.326 32.2123C355.83 29.3442 355.607 28.7303 356.105 28.8092C356.982 28.9583 360.214 32.1071 361.159 33.7297C361.623 34.5454 361.555 34.0718 360.953 32.5456C360.248 30.7037 359.32 28.8004 357.928 26.292C356.827 24.3536 356.535 23.5291 356.913 23.5291C357.824 23.5291 361.005 26.3007 362.895 28.7654C365.68 32.3527 367.296 36.0277 367.915 40.0974C368.107 41.3797 368.127 43.5373 368.012 45.2875H368.991C369.223 41.3887 368.373 37.7499 366.265 33.5718C364.649 30.3704 364.546 30.1073 364.993 30.1073C365.25 30.1073 366.505 31.1072 367.416 32.0281C370.665 35.3436 372.694 39.9395 372.917 44.4916C372.934 44.8695 372.934 44.869 373.418 44.1443L373.45 44.0969C375.478 40.9833 376.2 39.2291 376.613 36.3961C376.665 36.0277 376.785 35.7207 376.871 35.7207C377.129 35.7207 377.662 36.3961 377.902 37.0363C378.023 37.3521 378.126 38.159 378.126 38.8344L378.108 40.0623L378.435 39.4483C379.329 37.738 379.948 35.8523 379.948 34.8875C379.948 34.291 380.137 33.6157 380.292 33.6157C380.549 33.6157 381.117 34.4577 381.323 35.133C381.632 36.0891 381.461 38.466 380.979 39.7553C380.584 40.8605 379.862 42.3603 379.071 43.79C378.904 44.0808 378.558 44.6565 378.174 45.2875H378.888C378.942 45.2059 378.997 45.1219 379.054 45.0354C381.65 41.0447 382.664 38.9133 382.715 37.3784C382.715 37.1153 382.784 36.7294 382.836 36.5101L382.956 36.1154L383.265 36.3434C383.437 36.475 383.695 36.9135 383.85 37.3258L384.142 38.0713L385.208 36.8872C387.013 34.9138 389.368 32.9228 389.746 33.0456C389.849 33.0807 389.918 33.1859 389.918 33.2999C389.918 33.5017 389.093 35.0717 388.612 35.8084C386.504 38.9684 384.494 42.6493 383.385 45.2875H386.061C386.859 42.1328 388.507 38.9454 390.863 36.0277C391.603 35.1155 392.445 34.3174 392.685 34.3174C393.012 34.3174 392.806 35.133 391.809 37.624C391.242 39.0537 390.777 40.2553 390.795 40.3167C390.795 40.3693 391.087 39.9834 391.465 39.4659C392.204 38.4046 393.476 36.9925 393.82 36.8522C394.25 36.668 394.061 37.4837 393.167 39.6764C392.067 42.4217 392.032 42.5357 392.72 41.3779C393.459 40.1588 394.387 38.8168 394.989 38.1064C395.125 37.9498 395.221 37.8367 395.284 37.7387C395.669 37.3128 396.053 38.366 395.994 39.6625C395.977 39.6428 395.963 39.6491 395.952 39.6852C395.952 39.7103 395.819 40.0431 395.636 40.5012L395.625 40.5266C395.577 40.6488 395.524 40.7796 395.47 40.9156L395.401 41.0885C394.817 42.6059 394.319 44.0443 394.043 45.0179C394.023 45.0881 393.999 45.1799 393.971 45.2875H417.993C421.021 34.8875 430.623 27.2875 442 27.2875C455.807 27.2875 467 38.4804 467 52.2875C467 66.0947 455.807 77.2875 442 77.2875C430.623 77.2875 421.021 69.6876 417.993 59.2875H346.007C345.964 59.4328 345.921 59.5776 345.876 59.7218C342.711 69.8985 333.218 77.2876 322 77.2876C310.623 77.2876 301.021 69.6876 297.993 59.2876H226.007C222.979 69.6876 213.377 77.2876 202 77.2876C190.623 77.2876 181.021 69.6876 177.993 59.2876H107.007C103.979 69.6876 94.3772 77.2876 83 77.2876C69.1929 77.2876 58 66.0947 58 52.2876C58 38.4804 69.1929 27.2876 83 27.2876C94.3772 27.2876 103.979 34.8875 107.007 45.2876H177.993C181.021 34.8875 190.623 27.2876 202 27.2876C208.841 27.2876 215.041 30.0356 219.555 34.488C221.405 32.4854 222.063 29.0656 222.72 25.6457L222.72 25.6454C223.601 21.0612 224.483 16.4769 228.237 15.3063C228.002 18.8469 227.416 20.7975 226.842 22.7036C226.246 24.6866 225.664 26.6214 225.508 30.2482C229.04 28.4403 230.142 23.7434 231.243 19.0465C232.026 15.7041 232.81 12.3618 234.469 10.0605C235.367 12.0071 234.649 14.0681 233.872 16.2974L233.872 16.2976C233.23 18.1383 232.549 20.0938 232.704 22.1944C236.349 21.589 237.089 17.5328 237.83 13.4765C238.275 11.0354 238.721 8.59427 239.799 6.90505C240.734 8.04838 240.392 10.2656 240.051 12.483L240.051 12.4831C239.843 13.8339 239.635 15.1846 239.715 16.2927C241.645 15.6773 243.292 10.2835 244.207 7.28838C245.028 4.60077 245.259 3.84469 244.574 10.2061L244.728 10.2317C244.895 10.2596 245.058 10.2867 245.216 10.3125L247.345 7.41389C247.52 5.5193 249.103 3.59133 250.475 1.92216C251.043 1.22999 251.576 0.582327 251.955 0C253.806 1.42604 252.121 3.17795 250.324 5.04577C249.383 6.02464 248.41 7.03533 247.9 8.04764L247.66 10.5427C248.928 10.4904 250.144 10.0341 251.933 8.6702C252.12 9.1627 250.776 9.93846 249 10.9624C246.314 12.512 242.642 14.6301 241.806 17.1948C243.304 18.1526 244.835 17.3756 246.549 16.5055ZM83 74.2875C93.7843 74.2875 102.756 66.528 104.637 56.2875H180.363C182.244 66.528 191.216 74.2875 202 74.2875C212.784 74.2875 221.756 66.528 223.637 56.2875H300.257C302.138 66.528 311.109 74.2875 321.894 74.2875L321.947 74.2875L322 74.2875C332.784 74.2875 341.756 66.528 343.637 56.2875H420.257C422.138 66.528 431.109 74.2875 441.894 74.2875C454.044 74.2875 463.894 64.4378 463.894 52.2875C463.894 40.1373 454.044 30.2875 441.894 30.2875C431.109 30.2875 422.138 38.0471 420.257 48.2875H343.637C341.756 38.0471 332.784 30.2875 322 30.2875L321.947 30.2876L321.894 30.2875C311.109 30.2875 302.138 38.0471 300.257 48.2875H223.637C221.756 38.0471 212.784 30.2875 202 30.2875C191.216 30.2875 182.244 38.0471 180.363 48.2875H104.637C102.756 38.0471 93.7843 30.2875 83 30.2875C70.8497 30.2875 61 40.1373 61 52.2875C61 64.4378 70.8497 74.2875 83 74.2875Z"
                    fill="url(#paint0_linear_14_9)" />
                <path id="left-leaf"
                    d="M47.232 71.8525C47.9621 73.0826 55.4711 69.313 56.0114 70.5693C59.0015 77.5224 58.9053 84.7709 53.7503 91.1418C49.3576 85.508 43.5173 80.3585 42.4591 81.3727C41.3185 82.4659 46.2301 88.3302 49.8369 95.0119C48.5777 96.0306 47.1587 97.0168 45.5689 97.9638C44.0561 98.8651 42.4479 99.6944 40.7753 100.447C39.4933 95.7851 37.8119 91.2139 36.572 89.1415C36.0545 88.2775 35.6147 87.8477 35.3133 88.0272C34.2074 88.686 35.9755 95.1562 36.3995 102.186C33.9585 103.039 31.4408 103.729 28.9204 104.241C28.766 98.7799 27.9443 93.4605 26.9892 91.6673C26.7402 91.2001 26.483 90.9719 26.2261 91.0432C24.8312 91.4303 25.0135 96.0125 24.3791 104.965C21.7067 105.274 19.0849 105.369 16.6111 105.215C17.2847 100.614 17.4576 96.6925 16.7639 95.549C16.6378 95.3423 16.4847 95.2258 16.3004 95.2131C14.7456 95.1053 14.5761 99.3903 13.9312 104.943C8.40906 104.153 4.04821 105.915 1.75531 102.052C0.0233138 99.1339 -0.415693 91.6198 0.388468 87.7867C5.96699 87.6889 11.0624 88.92 11.0045 88.124C11.0016 88.0849 10.99 88.0432 10.969 87.9992C10.5484 87.1168 6.53706 85.3287 1.01448 85.4048C1.95137 82.4254 3.47131 79.3462 5.41389 76.3433C11.2649 79.6777 15.2742 83.401 16.4779 82.6839C16.6888 82.5583 16.6473 82.262 16.4019 81.8364C15.4655 80.212 11.5554 76.7019 7.33768 73.5852C9.12256 71.1889 11.1528 68.8814 13.3464 66.7559C21.1 73.7617 21.7813 78.3262 23.4889 77.6354C24.2015 77.347 23.4613 75.4343 21.9608 72.9073C20.4556 70.3715 18.1838 67.2231 15.8474 64.4721C17.507 63.0465 19.2319 61.7333 20.9925 60.5715C29.1475 72.1193 29.0659 72.4193 30.8557 71.7211C32.1806 71.2042 29.8875 63.7329 26.2611 57.6307C26.2584 57.6257 26.2558 57.6217 26.2531 57.6172C28.597 56.538 30.8279 55.8389 32.9432 55.4786C37.4805 62.8343 39.8344 70.6691 41.1556 70.3804C42.3725 70.1145 41.653 63.1564 38.2908 55.2875C43.7971 55.8793 49.6415 61.4262 53.1743 65.9966C53.9691 67.0249 46.5394 70.6857 47.232 71.8525Z"
                    fill="url(#paint2_linear_14_9)" />
                <path id="right-leaf"
                    d="M491.269 71.7563C481.654 70.5544 474.31 63.971 472.485 52.771C472.241 51.2761 482.368 50.8293 482.08 48.9763C481.906 47.8573 472.326 46.7533 472.139 45.0499C471.544 39.6293 469.293 29.4869 481.667 24.5717C477.907 34.008 480.553 42.9493 483.219 43.2497C483.28 43.2565 483.34 43.2587 483.401 43.2564C486.592 43.1389 482.138 33.3889 489.994 22.4661C490.855 22.3398 491.75 22.2274 492.691 22.1334C496.307 21.7722 499.705 22.0235 502.873 22.7195C496.13 31.0209 490.481 43.0065 491.943 43.0625C493.56 43.1244 495.657 36.5373 506.75 23.8238C509.857 24.9164 512.704 26.4245 515.276 28.1664C505.454 33.8111 499.411 43.7397 500.638 44.1193C500.664 44.127 500.692 44.1316 500.723 44.1319C502.16 44.1462 509.097 35.9016 518.702 30.7441C520.435 32.1843 522 33.7074 523.405 35.2357C515.564 38.1314 510.398 44.1598 511.698 44.8477C511.757 44.8789 511.827 44.8989 511.907 44.9083C513.531 45.0976 519.448 40.9899 526.324 38.7021C529.888 43.3356 531.798 47.4528 531.826 48.7258C531.882 51.3559 531.766 54.8527 522.94 60.8151C514.337 59.2549 507.147 55.271 506.572 57.3154C506.088 59.0336 512.586 61.3941 520.132 62.6137C518.181 63.8024 515.896 65.0828 513.245 66.4594C505.359 62.792 497.126 56.9474 495.875 58.6333C494.748 60.1521 501.473 64.3618 509.842 68.1756C505.991 70.0265 502.183 71.1832 498.552 71.6767C494.131 67.269 490.036 62.6315 489.183 63.8261C488.466 64.8298 490.895 68.3189 494.44 71.9541C493.36 71.95 492.301 71.8853 491.269 71.7563L491.269 71.7563Z"
                    fill="url(#paint3_linear_14_9)" />
                <defs>
                    <linearGradient id="paint0_linear_14_9" x1="431.619" y1="0" x2="431.619" y2="77.2876"
                        gradientUnits="userSpaceOnUse">
                        <stop stopColor="#4F772D" />
                        <stop offset="1" stopColor="#90A955" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_14_9" x1="97.0588" y1="35.2875" x2="97.0588" y2="69.2875"
                        gradientUnits="userSpaceOnUse">
                        <stop stopColor="#4F772D" />
                        <stop offset="1" stopColor="#90A955" />
                    </linearGradient>
                    <linearGradient id="paint2_linear_14_9" x1="52.9827" y1="55.2875" x2="52.9827" y2="105.288"
                        gradientUnits="userSpaceOnUse">
                        <stop stopColor="#4F772D" />
                        <stop offset="1" stopColor="#90A955" />
                    </linearGradient>
                    <linearGradient id="paint3_linear_14_9" x1="534.176" y1="60.0312" x2="476.378" y2="71.8836"
                        gradientUnits="userSpaceOnUse">
                        <stop stopColor="#4F772D" />
                        <stop offset="1" stopColor="#90A955" />
                    </linearGradient>
                </defs>
            </svg>
        </section>
    );
}