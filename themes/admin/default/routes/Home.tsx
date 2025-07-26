import Welcome from "../components/Welcome";
export default function Home() {
    return (
        <div className="w-full h-full">
            <Welcome /> to the Home Page<br />
            <span>The Contents of this Page Can be Customized in the <b>/themes/admin/default/routes/Home.tsx</b> Files</span>
        </div>
    )
}
