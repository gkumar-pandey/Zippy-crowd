import {
    RefObject,
    useState,
    useEffect,
    FC,
    useRef,
    PropsWithChildren,
    CSSProperties,
} from 'react';


function useElementOnScreen(ref: RefObject<Element>, rootMargin = "0px") {
    const [isIntersecting, setIsIntersecting] = useState(true);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsIntersecting(entry.isIntersecting);
            },
            { rootMargin }
        );
        const refCurr = ref.current;
        if (refCurr) {
            observer.observe(refCurr);
        }
        return () => {

            if (refCurr) {
                observer.unobserve(refCurr);
            }
        };
    }, [ref, rootMargin]);
    return isIntersecting;
}

const AnimateIn: FC<
    PropsWithChildren<{ from: CSSProperties; to: CSSProperties }>
> = ({ from, to, children }) => {
    const ref = useRef<HTMLDivElement>(null);
    const onScreen = useElementOnScreen(ref);
    const defaultStyles: CSSProperties = {
        transition: ".5s ease-in"
    };
    return (
        <div
            ref={ref}
            style={
                onScreen
                    ? {
                        ...defaultStyles,
                        ...to
                    }
                    : {
                        ...defaultStyles,
                        ...from
                    }
            }
        >
            {children}
        </div>
    );
};

const FadeIn: FC<PropsWithChildren> = ({ children }) => (
    <AnimateIn from={{ opacity: 0 }} to={{ opacity: 1 }}>
        {children}
    </AnimateIn>
);

const FadeInDelay: FC<PropsWithChildren> = ({ children }) => (
    <AnimateIn from={{ opacity: 0, transitionDelay: '0.2s' }} to={{ opacity: 1 }}   >
        {children}
    </AnimateIn>
)

const Animate = {
    FadeIn,
    FadeInDelay
}

export default Animate