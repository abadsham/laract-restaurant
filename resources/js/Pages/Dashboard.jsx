import { Head } from "@inertiajs/react";
import Header from "@/Components/Header";
import { usePage } from "@inertiajs/react";
import TableNumber from "../Components/TableNumber";
import ListReservation from "@/Components/ListReservation";

export default function Dashboard(props) {
    const { reservation } = usePage().props;
    const auth = props.auth;
    return (
        <>
            <div className="font-poppins">
                <Head title="Home" />
                <Header auth={props.auth} />
                <TableNumber auth={props.auth} />
                {auth.user.name == "admin" && (
                    <ListReservation reservation={reservation} />
                )}
            </div>
        </>
    );
}
