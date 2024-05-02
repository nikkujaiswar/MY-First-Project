import React from 'react'

export default function Skills() {
  return (
    <div className='container'>
    <section id='section2'>
    <div className='skills'>
      <div className='title-skills'>
        
        <div className='skills-cont'>
          <div className='html'>
            <img src='Html.png' alt='HTML Logo'/>
              <h1>HTML</h1>
            <p>
            HyperText Markup Language or HTML is the
             standard<br/> markup language for documents
              designed to be displayed<br/> in a web browser
               It defines the content and structure of
                web <br/>content.
            </p>
          </div>
          <div className='css'>
            <img src='css.png' alt='CSS  Logo'/>
            <h1>CSS</h1>
            <p>
            Cascading Style Sheets is a style 
            sheet language <br/> used for specifying 
            the presentation and styling of <br/>
            a document written in a markup language 
            such as <br/>HTML or XML.
            </p>
          </div>
          <div className='js'>
            <img src='js.png' alt='JavaScript  Logo'/>
            <h1>JAVSCRIPT</h1>
            <p>
            JavaScript, often abbreviated as
             JS, is a programming <br/> language and
              core technology of the Web, alongside
               <br/>HTML and CSS. 99% of websites use JavaScript
                on the <br/>client side for webpage behavior.
            </p>
          </div>
          
        </div>
        <div className='skills-cont2'>
        <div className='react'>
          <img src='Ayusreact.png'  alt='react Logo'/>
          <h1>REACT.JS</h1>
          <p>
          React is a free and open-source front-end JavaScript<br/>
           library for building user interfaces based on components<br/> 
           It is maintained by Meta and a community of individual 
           <br/>developers and companies. 
          </p>
        </div>
        <div className='Figma'>
          <img src='icons8-figma-48(1).png' alt='Figma icon'/>
          <h1>FIGMA</h1>
          <p>
          Figma is a collaborative web application<br/>
           for interface design, with additional 
           offline<br/> features enabled by desktop
            applications for<br/> macOS and Windows.
          </p>
          
        </div>
        <div className='boot'>
          <img src='boot.png' alt='Boot icon'/>
          <h1>BOOTSTRAP</h1>
          <p>
          Bootstrap is a free and open-source CSS
           framework<br/> directed at responsive, mobile-first front-end web <br/>
           development. It contains HTML, CSS and JavaScript<br/>based design templates for typography.
          </p>
        </div>

        </div>

      </div>
    </div>
</section>
      
    </div>
  )
}
