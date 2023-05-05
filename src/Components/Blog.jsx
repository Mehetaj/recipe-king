import React from 'react';
import Pdf from 'react-to-pdf'

const Blog = () => {
    const ref= React.createRef();
    return (
        <div className='container mx-auto'>
            <Pdf targetRef={ref} filename="assignment-10.pdf">
                {({toPdf}) => <button className='bg-gray-200 py-2 px-6 mx-auto text-center my-6' onClick={toPdf}>Download Pdf</button>}
            </Pdf>
            <div ref={ref}>
            <div  className='bg-rose-100 my-10 p-10'>
                <h1 className='text-2xl font-bold'>Tell us the differences between uncontrolled and controlled components.</h1>
                <p>When a user interacts with a controlled component, such as by typing in an input field, the value of the component is updated in the component's state. This allows the component to have full control over the form element's behavior, and makes it easy to validate and manipulate user input.</p>
                <br />
                <p>With uncontrolled components, the form element's state is managed by the browser rather than being explicitly controlled by the component's state. For example, if you have an input field, you can access its value using JavaScript after a form submission or by querying the DOM.

                    Unlike controlled components, uncontrolled components do not rely on updating the component's state with each user interaction. This can make them easier to implement in certain cases and can lead to less code, especially for simple forms where you don't need to perform validation or manipulate user input.

                    However, uncontrolled components may not provide the same level of control and predictability as


                </p>
            </div>

            <div className='p-10 bg-rose-200 my-10'>
                <h1 className='text-2xl font-bold'>How to validate React props using PropTypes</h1>
                <p>To validate React props using PropTypes, you need to import the PropTypes package from the "prop-types" module. Once imported, you can define the PropTypes for a component by setting a "propTypes" object as a static property on the component.</p>
            </div>
            <div className='p-10 bg-rose-300 my-10'>
                <h1 className='text-2xl font-bold'>User
                    Tell us the difference between nodejs and express js.</h1>
                <p>Node.js is a server-side JavaScript runtime that allows developers to build fast and scalable web applications using JavaScript on the server. It provides an environment for running JavaScript code outside of the browser, which makes it possible to build server-side applications with JavaScript.</p>
                <br />
                <p>Express.js, on the other hand, is a lightweight web framework built on top of Node.js that provides a set of features for building web applications, such as routing, middleware, and handling HTTP requests and responses. It simplifies the process of building web applications with Node.js by providing a set of pre-built tools and conventions for handling common web development tasks.</p>
            </div>

            <div className='p-10 bg-rose-400 my-10'>
                <h1 className='text-2xl font-bold'>What is a custom hook, and why will you create a custom hook?</h1>
                <p>
                    A custom hook is a JavaScript function that uses one or more built-in React hooks and/or other custom hooks to provide a specific functionality or behavior in a reusable way. Custom hooks allow you to extract and share logic between components, making it easier to reuse code and simplify your application's codebase.

                </p>
            </div>
            </div>
        </div>
    );
};

export default Blog;