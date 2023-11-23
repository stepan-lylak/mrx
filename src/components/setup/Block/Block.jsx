
import './Block.scss';

export default function Block({ children }) {
    return <div className="su-block">
        {children}
    </div>
}

Block.Header = Header;
Block.Body = Body;

function Header({ children }) {
    return <div className="su-block-header">
        {children}
    </div>
}

function Body({ children }) {
    return <div className="su-block-body">
        {children}
    </div>
}
