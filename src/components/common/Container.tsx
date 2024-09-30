const Container = ({ children, className = '' }) => {
    return (
        <div className={`max-w-2xl mx-auto ${className} lg:px-7 px-3`}>
            {children}
        </div>
    );
};

export default Container;
