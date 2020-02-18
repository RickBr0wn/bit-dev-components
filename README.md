Build the React Component

Now that the compiler is installed, build the component. Building the component serves two purposes:

Make the component directly consumable by other projects.
Make sure that the component is all-inclusive and contains all the parts that are required in order to share it with others.
Right now the component lives inside your project and may consume some dependencies from your project. Bit build is taking place in an isolated environment to make sure the process will also succeed on the cloud or in any other project. To build your component, run this command inside your react project:

bit build
This results in the component name (product-list) followed by a list of file names. Those are the built files of the component.

Export Component

With the component properly built, it is now time to share it with the world.
Components are versioned according to semver standards. To tag your component with a version, run the following command:

$ bit tag --all 0.0.1
1 component(s) tagged
(use "bit export [collection]" to push these components to a remote")
(use "bit untag" to unstage versions)

new components
(first version for components)
     > product-list@0.0.1
This command tags all the components that are currently staged in Bit. In our case, it's only the product-list component.

You can check the component status (bit status) and you'll find the following:

$ bit status
staged components
(use "bit export <remote_scope> to push these components to a remote scope")

     > product-list. versions: 0.0.1 ... ok
The important thing to notice here is that the component is considered staged. That means that it is now ready to be exported.

To export the component to your bit.dev collection, we will use the export command and the full name of the collection, structured as <username>.<collection>:

$ bit export <username>.react-tutorial
exported 1 components to scope <username>.react-tutorial
The component is now visible in your collection on bit.dev. You can access it in https://bit.dev/<username>/react-tutorial. You can also visit the component created for this demo on: https://bit.dev/bit/react-tutorial

At this point, checking bit's status will no longer display the component as the component is now hosted on the remote collection:

$ bit status
nothing to tag or export
If you want to see all the components you have you can run:

bit list
You will get a list of all components and their versions.

Right now, the component code is in your local project (and should be committed to your source control), but it is also available for other projects.

Prev