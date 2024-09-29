const Container = ({ children, className = '' }) => {
    return (
        <div className={`max-w-2xl lg:px-0 mx-auto ${className} px-3 `}>
            {children}
        </div>
    );
};

export default Container;
