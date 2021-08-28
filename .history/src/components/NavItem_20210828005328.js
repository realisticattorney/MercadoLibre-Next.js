
function NavItem(props) {
   const [open, setOpen] = useState(false);
 
   return (
     <li className="nav-item">
       <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
         {props.icon}
       </a>
 
       {open && props.children}
     </li>
   );
 }
 
 
function DropdownMenu() {
   const [activeMenu, setActiveMenu] = useState('main');
   const [menuHeight, setMenuHeight] = useState(null);
   const dropdownRef = useRef(null);
 
   useEffect(() => {
     setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
   }, []);
 
   function calcHeight(el) {
     const height = el.offsetHeight;
     setMenuHeight(height);
   }
 