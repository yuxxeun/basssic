const Container = ({ children, className = '' }) => {
    return (
        <div className={`max-w-2xl mx-auto lg:px-4 px-3 ${className}`}>
            {children}
        </div>
    );
};

export default Container;
