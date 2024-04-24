import React, { useEffect, useState } from "react";
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
    Button,
    Alert,
    Rating,
    Chip,
} from "@material-tailwind/react";
import BaseLayout from "../components/BaseLayout";
import { selectTeams } from "../features/team/teamSlice";
import { useSelector } from "react-redux";
import { selectUserDetails } from "../features/user/userSlice";
import { HACKATHONS, REQUESTS, TEAMS, USER } from "../constants";
import { selectHackathons } from "../features/hackathon/hackathonSlice";

const PastTeams = () => {
    const teamsData = useSelector(selectTeams);
    const [pastTeams, setPastTeams] = useState([]);

    const userData = useSelector(selectUserDetails);
    const hackathonsData = useSelector(selectHackathons);

    useEffect(() => {
        // console.log(teamsData);
        const newTeams = teamsData?.filter(
            (team) => team?.hackathonId !== userData?.assignedHackathon
        );
        if (newTeams.length > 0) {
            setPastTeams(newTeams);
        }
    }, [teamsData]);

    return (
        <BaseLayout>
            <div className="container py-4 mx-auto  px-1">
                <Typography
                    variant="h3"
                    className="mb-3 text-incedo-secondary-600"
                >
                    My Participations
                </Typography>
                <div className="grid grid-cols-1 auto-cols-fr md:grid-cols-2 gap-4">
                    {pastTeams.length > 0 ? (
                        pastTeams.map((team) => (
                            <Card
                                shadow={false}
                                key={team.teamId}
                                className="w-full px-4 py-0"
                            >
                                <CardHeader
                                    color="transparent"
                                    floated={false}
                                    shadow={false}
                                    className="mx-0 flex items-center gap-4 p-1 pb-3"
                                >
                                    <div className="flex w-full flex-col px-1 gap-0.5">
                                        <div className="flex items-center justify-between">
                                        <div className="flex mb-2">
                                            <Typography
                                                variant="h5"
                                                color="blue-gray"
                                            >
                                                {team?.name} [
                                                {hackathonsData?.find(
                                                    (hackathon) =>
                                                        hackathon.hackathonId ===
                                                        team.hackathonId
                                                )?.name || "Unavailable"}
                                                ]
                                                
                                            </Typography>
                                            {hackathonsData?.find(
                                                    (hackathon) =>
                                                        hackathon.hackathonId ===
                                                        team.hackathonId
                                                )?.firstTeamName ===
                                                    team.name && (
                                                        <svg
                                                        name="first icon"
                                                        height="32"
                                                        id="office"
                                                        width="32"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            style={{
                                                                lineHeight: "normal",
                                                                textIndent: "0",
                                                                textAlign: "start",
                                                                textDecorationLine: "none",
                                                                textDecorationStyle:
                                                                    "solid",
                                                                textDecorationColor: "#000",
                                                                textTransform: "none",
                                                                blockProgression: "tb",
                                                                whiteSpace: "normal",
                                                                isolation: "auto",
                                                                mixBlendMode: "normal",
                                                                solidColor: "#000",
                                                                solidOpacity: "1",
                                                            }}
                                                            d="M14.035 2.99a1.85 1.85 0 0 0-.537.096v.002c-.735.247-1.098.864-1.357 1.38-.26.518-.463.969-.79 1.23-.326.26-.813.36-1.374.497-.562.138-1.243.356-1.647 1.018-.404.661-.286 1.367-.152 1.93.133.563.266 1.038.183 1.447-.082.409-.39.797-.732 1.264-.342.466-.723 1.07-.608 1.837.116.767.66 1.231 1.124 1.577.464.345.872.625 1.072.992.2.366.213.862.252 1.44.038.577.133 1.285.715 1.798.581.513 1.297.518 1.875.484.347-.02.659-.041.941-.025v9.049c0 .721.8 1.217 1.445.894l1.739-.869c.2-.1.433-.1.632 0l1.733.867c.647.324 1.45-.172 1.451-.896v-8.871c.221.012.453.038.709.064.575.062 1.288.091 1.895-.392.606-.484.737-1.185.804-1.76.067-.575.105-1.07.322-1.426.218-.356.64-.613 1.122-.935.48-.322 1.045-.76 1.199-1.52.153-.76-.2-1.384-.518-1.867-.318-.483-.606-.884-.668-1.297-.062-.413.097-.884.258-1.44.162-.555.312-1.252-.059-1.933-.37-.68-1.04-.932-1.595-1.098-.555-.165-1.035-.288-1.348-.564-.313-.276-.493-.736-.726-1.266-.234-.53-.568-1.164-1.29-1.447-.721-.283-1.394-.043-1.925.186-.531.229-.978.444-1.395.433-.417-.01-.854-.246-1.373-.502-.39-.191-.857-.392-1.377-.377zm.047.998c.265-.006.535.106.89.278.475.233 1.047.587 1.788.605.74.018 1.33-.306 1.816-.516.486-.21.81-.311 1.166-.171.357.14.523.434.737.918.213.483.426 1.122.982 1.613.556.49 1.216.622 1.723.773.506.152.818.28 1.002.617.183.337.122.668-.026 1.176-.147.508-.394 1.134-.283 1.867.11.734.531 1.258.822 1.7.291.441.447.743.371 1.119-.076.375-.336.59-.775.885-.44.294-1.032.613-1.418 1.246-.387.632-.402 1.306-.463 1.832-.061.525-.134.854-.434 1.093-.3.24-.638.237-1.164.18-.525-.057-1.184-.192-1.886.045-.703.236-1.147.742-1.532 1.106-.384.363-.651.568-1.035.558-.383-.01-.642-.228-1.008-.61-.366-.381-.784-.908-1.474-1.179-.69-.27-1.353-.17-1.881-.139s-.867.018-1.154-.236c-.288-.254-.344-.587-.38-1.115-.034-.528-.016-1.2-.37-1.852-.355-.65-.93-1-1.354-1.316-.424-.316-.675-.543-.732-.922-.057-.38.113-.671.426-1.098.312-.426.759-.931.906-1.658.147-.727-.07-1.36-.192-1.875-.122-.514-.166-.85.034-1.178.2-.327.517-.44 1.03-.566.514-.126 1.181-.227 1.76-.69.58-.462.822-1.087 1.06-1.56.236-.473.419-.759.782-.88a.89.89 0 0 1 .266-.05zm.605 1.36c-.139.004-.284.028-.431.078v-.002c-.59.198-.88.697-1.074 1.084-.195.387-.342.696-.55.861-.206.165-.54.239-.96.342-.42.103-.972.277-1.297.809-.325.531-.227 1.102-.127 1.523.1.421.187.75.135 1.01-.053.26-.262.53-.518.879-.256.35-.563.837-.47 1.453.092.616.529.988.876 1.246.348.258.63.457.756.69.127.232.142.573.17 1.005.029.432.105 1.004.573 1.416.467.412 1.042.416 1.474.39.432-.024.773-.053 1.02.044.246.097.477.35.777.662.3.312.725.703 1.348.719.623.015 1.068-.353 1.382-.65.315-.298.556-.54.807-.624.251-.084.593-.039 1.024.01.43.047 1.005.071 1.492-.316.487-.389.59-.955.64-1.385.05-.426.084-.76.22-.987.14-.208.378-.35.716-.584.342-.235.759-.593.988-1.203l.016-.037.008-.04c.123-.611-.16-1.114-.399-1.475-.238-.362-.435-.64-.474-.903-.04-.262.062-.588.183-1.004.121-.416.247-.98-.05-1.527-.299-.547-.84-.747-1.255-.871-.414-.124-.744-.213-.943-.389-.199-.175-.329-.492-.504-.888-.175-.397-.441-.908-1.021-1.135-.58-.228-1.124-.034-1.522.138-.397.172-.707.316-.972.31-.265-.01-.567-.167-.955-.358-.292-.144-.665-.304-1.082-.291zm.217 1.013c.118.029.252.086.424.172.344.17.782.447 1.371.461.59.015 1.045-.238 1.397-.39.352-.152.542-.21.758-.125.215.084.318.256.472.607.155.35.314.845.756 1.234.442.39.951.488 1.318.598.368.11.552.188.663.39.11.204.077.402-.03.77s-.3.85-.213 1.432c.088.582.416.986.627 1.306.2.305.271.479.24.69-.14.333-.313.503-.583.69-.287.197-.693.409-.993.86l-.006.01-.005.01c-.308.503-.314 1.022-.358 1.403-.044.38-.09.574-.271.718-.181.144-.38.147-.762.106-.381-.041-.889-.15-1.447.039-.559.187-.9.578-1.178.842-.279.263-.439.382-.67.377-.23-.01-.385-.132-.65-.409-.266-.276-.587-.685-1.135-.9-.549-.215-1.06-.134-1.443-.111-.383.023-.583.01-.756-.143-.174-.153-.21-.35-.235-.732-.025-.383-.009-.9-.29-1.418-.283-.518-.726-.785-1.034-1.014-.308-.229-.456-.365-.49-.594-.035-.228.066-.401.293-.71.226-.31.573-.697.69-1.274.116-.578-.055-1.067-.143-1.44-.089-.372-.113-.572.008-.77.12-.196.309-.267.681-.358.372-.091.887-.166 1.348-.534.46-.367.644-.85.816-1.193.172-.343.283-.51.502-.584v-.004c.11-.037.21-.04.328-.012zm2.098 2.594a.772.772 0 0 0-.295.098l-1.145.677a.497.497 0 0 0-.166.698.486.486 0 0 0 .436.26c.042 0 .086 0 .13-.016a.437.437 0 0 0 .132-.057l.37-.215v4.106H16a.499.499 0 1 0 0 1h2a.499.499 0 1 0 0-1h-.502c0-1.753 0-3.527.002-5.026 0-.37-.218-.552-.498-.525zM19 20.315V23h-5v-2.635c.205.176.408.393.635.63.4.417.928.898 1.703.917.775.02 1.327-.435 1.748-.832.33-.312.615-.593.914-.766zM14 24h5v1h-5v-1zm0 2h5v3.002c0 .024.017.012-.004 0l-1.732-.867a1.709 1.709 0 0 0-1.528 0l-1.736.87V26z"
                                                            fontFamily="sans-serif"
                                                            fillRule="evenodd"
                                                        />
                                                    </svg>
                                                )}
                                                {hackathonsData?.find(
                                                    (hackathon) =>
                                                        hackathon.hackathonId ===
                                                        team.hackathonId
                                                )?.secondTeamName ===
                                                    team.name && (
                                                        <svg
                                                        name="second icon"
                                                        height="32"
                                                        id="office"
                                                        width="32"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            style={{
                                                                lineHeight: "125%",
                                                                InkscapeFontSpecification:
                                                                    "'Quicksand Bold'",
                                                            }}
                                                            d="M13.49 1023.853a2.01 2.01 0 0 0-.535.098c-.735.247-1.1.865-1.36 1.382-.259.518-.462.967-.789 1.227-.326.26-.81.36-1.373.498-.561.138-1.244.356-1.648 1.018-.404.661-.286 1.366-.152 1.93.133.562.268 1.038.185 1.447-.082.409-.392.798-.734 1.265-.342.467-.723 1.07-.608 1.836.116.767.66 1.233 1.123 1.578.465.345.875.624 1.075.99.2.367.211.863.25 1.44.038.577.135 1.286.716 1.799.582.513 1.296.52 1.874.486.365-.02.693-.045.986-.023v8.543c0 .722.8 1.217 1.445.895l1.738-.87c.2-.1.434-.1.633 0l1.733.868c.647.323 1.45-.173 1.45-.897v-8.365c.21.014.427.036.667.06.575.063 1.288.092 1.894-.392.606-.483.736-1.185.803-1.76.067-.574.107-1.071.324-1.427.218-.356.639-.614 1.12-.936.48-.321 1.047-.76 1.2-1.52.154-.76-.199-1.381-.517-1.864-.318-.484-.608-.885-.67-1.297-.062-.413.097-.884.258-1.44.161-.556.314-1.255-.057-1.935-.37-.681-1.041-.933-1.595-1.098-.555-.166-1.035-.288-1.348-.564-.313-.277-.495-.735-.729-1.264-.233-.53-.565-1.164-1.287-1.447-.721-.284-1.394-.043-1.925.185-.532.23-.978.444-1.395.434-.417-.01-.854-.247-1.373-.502-.39-.192-.859-.393-1.379-.377zm.049.998c.265-.01.533.105.889.277.474.234 1.047.587 1.789.605.74.018 1.33-.306 1.816-.515.486-.21.81-.312 1.166-.172.357.14.521.434.734.918.214.484.429 1.123.985 1.613s1.214.622 1.72.774c.507.151.821.28 1.004.617.184.336.123.668-.025 1.176-.148.507-.396 1.134-.285 1.867.11.733.531 1.26.822 1.701.291.442.45.741.373 1.117-.076.376-.338.59-.777.885-.44.294-1.03.613-1.416 1.246-.387.633-.404 1.307-.465 1.832-.061.525-.132.855-.432 1.094-.3.239-.638.237-1.164.18-.525-.058-1.184-.192-1.886.044-.703.237-1.147.743-1.532 1.106-.384.363-.654.568-1.037.559-.383-.01-.64-.228-1.006-.61s-.784-.909-1.474-1.18c-.69-.27-1.355-.17-1.883-.138-.528.03-.867.017-1.154-.237-.288-.253-.342-.587-.377-1.115-.035-.527-.017-1.2-.371-1.851-.355-.651-.932-1.001-1.356-1.317-.424-.315-.673-.543-.73-.922-.058-.379.113-.67.425-1.097.313-.427.76-.93.907-1.657.146-.726-.071-1.362-.194-1.876-.122-.515-.166-.851.034-1.178.2-.327.52-.44 1.033-.567.513-.126 1.178-.227 1.758-.689.58-.462.823-1.086 1.06-1.559.237-.472.418-.76.781-.882.091-.03.18-.047.268-.05zm.623 1.476c-.138 0-.281.027-.428.076-.586.197-.876.693-1.068 1.076-.192.384-.336.687-.54.85-.203.162-.532.235-.948.338-.417.102-.963.275-1.286.803-.322.527-.228 1.09-.128 1.507.099.418.186.745.134 1-.051.256-.258.523-.511.87-.254.345-.56.827-.467 1.439.092.612.527.982.87 1.238.345.256.622.451.747.68.125.229.138.566.166.994.028.428.105.995.568 1.404.464.41 1.035.412 1.463.387.428-.025.766-.052 1.008.043.243.095.47.345.768.654.296.31.72.696 1.338.711.618.015 1.057-.35 1.369-.644.311-.295.552-.533.798-.616.247-.083.582-.036 1.008.012.427.046 1 .07 1.483-.316.483-.386.587-.949.636-1.375.05-.426.08-.762.215-.984.136-.223.421-.402.778-.64.356-.24.81-.59.933-1.196.123-.607-.162-1.101-.398-1.46-.236-.357-.426-.638-.465-.896-.039-.257.062-.576.182-.988.12-.412.243-.973-.053-1.516s-.833-.742-1.244-.865c-.411-.123-.737-.208-.932-.38-.195-.173-.323-.487-.496-.88-.173-.392-.438-.899-1.014-1.125-.576-.226-1.114-.035-1.508.135-.393.17-.7.313-.96.307-.261-.01-.56-.164-.944-.354-.288-.142-.66-.3-1.074-.287zm.215 1.014c.115.028.248.085.418.17.34.167.777.44 1.361.455.585.014 1.031-.236 1.379-.387.348-.15.537-.206.748-.123.211.083.312.249.465.596.153.347.311.838.75 1.224.438.387.943.484 1.307.592.363.109.541.188.65.387.108.199.076.392-.03.756-.105.364-.298.84-.21 1.418.087.578.412.978.62 1.295.21.316.298.49.253.713-.045.222-.195.351-.51.562-.649.385-.912.74-1.154 1.258a4.779 4.779 0 0 0-.278 1.082c-.043.377-.088.568-.265.709-.177.141-.372.143-.748.102-.377-.041-.882-.148-1.436.039-.554.186-.89.575-1.166.836-.275.26-.434.378-.66.373-.227-.01-.378-.133-.64-.407-.263-.273-.58-.679-1.124-.892-.544-.214-1.053-.132-1.431-.11-.379.022-.575.011-.745-.138-.17-.15-.203-.343-.228-.721-.025-.378-.01-.893-.29-1.406-.279-.514-.72-.778-1.024-1.004-.305-.226-.447-.36-.481-.584-.034-.224.061-.396.285-.701.224-.306.57-.689.686-1.262.116-.573-.053-1.057-.14-1.426-.088-.369-.111-.564.007-.758.118-.193.302-.26.67-.351.368-.09.879-.165 1.336-.53.457-.364.638-.844.808-1.183.17-.339.28-.502.495-.574a.551.551 0 0 1 .322-.01zm1.73 2.512c-.268 0-.532.046-.79.14-.26.095-.494.24-.706.436l-.289.26a.509.509 0 0 0-.168.355.518.518 0 0 0 .486.543.495.495 0 0 0 .37-.135l.289-.262a1.23 1.23 0 0 1 .808-.306c.165 0 .325.031.479.094.154.063.291.163.414.297a1.207 1.207 0 0 1 .307.809 1.157 1.157 0 0 1-.39.892l-2.753 2.492a.512.512 0 0 0-.027.725.442.442 0 0 0 .173.125.535.535 0 0 0 .207.043h3.311a.51.51 0 0 0 .512-.512.521.521 0 0 0-.149-.367.502.502 0 0 0-.363-.152h-1.98l1.757-1.59c.243-.223.424-.478.547-.766a2.243 2.243 0 0 0 .045-1.68 2.12 2.12 0 0 0-.435-.707 2.22 2.22 0 0 0-1.655-.734zm2.393 11.302v3.213h-5v-3.103c.19.168.38.372.59.591.4.418.928.897 1.703.916.775.02 1.327-.434 1.748-.832.347-.327.644-.616.959-.785zm-5 4.213h5v1h-5v-1zm0 2h5v1.994c0 .024.017.012-.004 0l-1.732-.867a1.709 1.709 0 0 0-1.528 0l-1.736.871v-1.998z"
                                                            fontFamily="Quicksand"
                                                            transform="translate(0 -1020.362)"
                                                        />
                                                    </svg>
                                                )}
                                                {hackathonsData?.find(
                                                    (hackathon) =>
                                                        hackathon.hackathonId ===
                                                        team.hackathonId
                                                )?.thirdTeamName ===
                                                    team.name && (
                                                        <svg
                                                        name="third icon"
                                                        height="32"
                                                        id="office"
                                                        width="32"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            style={{
                                                                lineHeight: "normal",
                                                                textIndent: "0",
                                                                textAlign: "start",
                                                                textDecorationLine: "none",
                                                                textDecorationStyle:
                                                                    "solid",
                                                                textDecorationColor: "#000",
                                                                textTransform: "none",
                                                                blockProgression: "tb",
                                                                whiteSpace: "normal",
                                                                isolation: "auto",
                                                                mixBlendMode: "normal",
                                                                solidColor: "#000",
                                                                solidOpacity: "1",
                                                            }}
                                                            d="M13.99 2.492a1.838 1.838 0 0 0-.535.096v.002c-.735.247-1.1.866-1.36 1.383-.259.517-.462.966-.788 1.226-.327.26-.812.36-1.373.498-.562.138-1.245.356-1.649 1.018-.404.661-.286 1.367-.152 1.93.134.562.268 1.038.185 1.447-.082.409-.392.799-.734 1.265-.342.467-.723 1.07-.607 1.836.115.767.658 1.233 1.123 1.578.464.346.874.624 1.074.99.2.367.212.863.25 1.44.038.577.135 1.286.717 1.799.581.513 1.295.52 1.873.486.366-.021.693-.044.986-.023v8.543c0 .721.8 1.217 1.445.894l1.739-.869c.2-.1.433-.1.632 0l1.733.867c.647.324 1.45-.172 1.451-.896v-8.365c.21.013.426.035.666.06.575.062 1.288.09 1.895-.392.606-.484.735-1.185.802-1.76.067-.575.107-1.072.325-1.428.217-.356.638-.613 1.119-.935.48-.322 1.047-.76 1.2-1.52.154-.76-.199-1.382-.517-1.865-.318-.483-.607-.884-.67-1.297-.062-.413.097-.884.258-1.44.162-.555.314-1.254-.057-1.935-.37-.68-1.04-.932-1.595-1.098-.555-.165-1.035-.288-1.348-.564-.313-.276-.495-.734-.728-1.264-.234-.53-.566-1.164-1.288-1.447-.721-.283-1.394-.043-1.925.186-.531.229-.978.443-1.395.433-.417-.01-.854-.246-1.373-.502-.39-.191-.859-.392-1.379-.377Zm.05.998c.264-.006.532.106.888.278.474.233 1.048.587 1.789.605.741.018 1.33-.306 1.816-.516.486-.21.81-.311 1.166-.171.357.14.521.434.735.918.213.483.428 1.122.984 1.613.556.49 1.214.622 1.72.773.507.152.821.28 1.005.617.183.337.122.668-.026 1.176-.147.508-.396 1.134-.285 1.867.11.733.531 1.26.822 1.702.291.441.45.74.373 1.117-.076.376-.338.59-.777.885-.44.294-1.03.613-1.416 1.246-.387.632-.404 1.306-.465 1.832-.061.525-.132.854-.431 1.093-.3.24-.639.237-1.165.18-.525-.057-1.184-.192-1.886.045-.703.236-1.147.742-1.532 1.105-.384.364-.653.569-1.037.56-.383-.01-.64-.229-1.005-.61-.366-.382-.785-.91-1.475-1.18-.69-.27-1.355-.17-1.883-.139s-.867.018-1.154-.236c-.288-.254-.342-.588-.377-1.115-.035-.528-.017-1.2-.371-1.852-.355-.65-.931-1-1.356-1.316-.424-.316-.673-.543-.73-.922-.057-.38.113-.671.426-1.098.312-.427.759-.93.906-1.656.147-.727-.071-1.362-.194-1.877-.122-.514-.166-.85.034-1.178.2-.327.52-.44 1.033-.566.513-.126 1.178-.227 1.758-.69.58-.462.823-1.085 1.06-1.558.237-.473.418-.76.781-.883.091-.03.18-.047.268-.049zm.622 1.477a1.474 1.474 0 0 0-.428.076v-.002c-.586.197-.876.693-1.068 1.076-.192.383-.335.687-.539.85-.204.162-.533.235-.95.338-.416.102-.962.275-1.284.802-.323.528-.228 1.091-.13 1.508.1.417.187.745.135 1-.051.256-.258.523-.511.87-.254.345-.56.827-.467 1.439.092.611.527.982.871 1.238s.621.451.746.68c.125.229.138.566.166.994.028.428.105.995.568 1.404.464.41 1.035.412 1.463.387.428-.025.766-.052 1.008.043.243.095.471.345.768.654.297.31.72.696 1.338.711.618.015 1.057-.35 1.369-.644.311-.295.552-.533.799-.616.247-.083.581-.038 1.007.01.427.046 1 .072 1.483-.314.483-.386.587-.95.637-1.375.05-.426.079-.762.214-.985.136-.222.421-.404.778-.642.356-.239.81-.587.933-1.194.123-.606-.162-1.102-.398-1.46-.236-.359-.426-.637-.465-.895-.039-.258.062-.577.182-.988.12-.412.243-.973-.053-1.516s-.833-.742-1.244-.865c-.411-.123-.736-.21-.932-.383-.195-.172-.323-.485-.496-.877s-.438-.899-1.014-1.125c-.575-.226-1.114-.035-1.507.135-.394.17-.7.313-.961.306-.26-.01-.559-.164-.944-.353-.288-.142-.66-.3-1.074-.287zm.215 1.013c.116.028.248.085.418.17.34.168.777.441 1.361.455.585.014 1.031-.236 1.38-.386.347-.15.536-.206.747-.123.211.083.312.249.465.595.153.347.312.838.75 1.225.438.387.944.483 1.307.592.363.108.542.188.65.387.108.199.077.391-.03.755-.105.364-.297.84-.21 1.418.087.579.412.979.62 1.295.21.317.298.491.253.713-.045.222-.195.352-.51.563-.649.385-.912.74-1.154 1.257a4.78 4.78 0 0 0-.278 1.083c-.043.376-.088.567-.265.708-.177.142-.371.143-.748.102-.377-.04-.882-.147-1.436.04-.554.185-.89.575-1.166.835-.275.26-.433.379-.66.373-.227-.01-.378-.133-.64-.406-.263-.274-.58-.68-1.124-.893-.544-.213-1.053-.131-1.431-.11-.379.023-.574.012-.744-.138-.17-.15-.204-.342-.229-.72-.025-.379-.01-.893-.289-1.407-.28-.513-.721-.778-1.025-1.004-.304-.226-.447-.36-.48-.584-.035-.224.06-.395.284-.7.224-.307.57-.69.686-1.263.116-.573-.053-1.057-.14-1.425-.088-.369-.111-.565.007-.758.118-.193.302-.261.67-.352.368-.09.879-.164 1.336-.529.457-.365.639-.845.809-1.184.17-.338.279-.502.494-.574a.553.553 0 0 1 .322-.01zm.398 2.966a.517.517 0 0 0-.521.52.534.534 0 0 0 .152.377c.098.099.222.15.37.154h1.505l-.947.967a.542.542 0 0 0-.145.375.52.52 0 0 0 .163.369c-.002.01.002.01.01.01a.48.48 0 0 0 .17.129c.065.03.135.04.21.037.164 0 .322.036.473.095.151.06.288.153.41.278a1.198 1.198 0 0 1 .371.882 1.255 1.255 0 0 1-.371.893 1.294 1.294 0 0 1-.893.363 1.252 1.252 0 0 1-.882-.363.528.528 0 0 0-.899.371c0 .14.052.265.154.373a2.32 2.32 0 0 0 1.627.678 2.325 2.325 0 0 0 1.637-.678 2.31 2.31 0 0 0 .51-2.504 2.238 2.238 0 0 0-.51-.76 1.981 1.981 0 0 0-.305-.26 2.34 2.34 0 0 0-.345-.197l1.172-1.207a.67.67 0 0 0 .091-.13.668.668 0 0 0 .047-.12.497.497 0 0 0-.134-.5.533.533 0 0 0-.377-.152zM19 19.795v3.213h-5v-3.104c.19.17.38.373.59.592.4.418.928.897 1.703.916.775.02 1.327-.435 1.748-.832.347-.327.644-.616.959-.785Zm-5 4.213h5v1h-5zm0 2h5v1.994c0 .024.017.012-.004 0l-1.732-.867a1.709 1.709 0 0 0-1.528 0l-1.736.87Z"
                                                            fontFamily="sans-serif"
                                                            fillRule="evenodd"
                                                        />
                                                    </svg>
                                                )}
                                            </div>
                                            {team?.consolidatedRating ? (
                                                <Typography>
                                                    {team?.consolidatedRating.toFixed(
                                                        2
                                                    )}
                                                    /5.00
                                                </Typography>
                                            ) : null}
                                        </div>
                                        <div className="flex items-baseline gap-2 justify-start">
                                            <Typography
                                                className=""
                                                color="blue-gray"
                                            >
                                                {team?.ideaTitle}
                                            </Typography>
                                            <Chip
                                                size="sm"
                                                variant="ghost"
                                                className="rounded-xl font-normal"
                                                value={team?.status}
                                            />
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardBody className="mb-3 py-0 px-2 flex justify-between items-end">
                                    <div>
                                        <Typography variant="h6">
                                            Feedback
                                        </Typography>
                                        <div className="flex flex-col gap-3 ml-2">
                                            {team?.feedBacks?.length > 0 ? (
                                                team.feedBacks.map(
                                                    (feedBack, index) => (
                                                        <Typography
                                                            key={index}
                                                            className=" text-justify"
                                                        >
                                                            {index + 1}.{" "}
                                                            {feedBack}
                                                        </Typography>
                                                    )
                                                )
                                            ) : (
                                                <Typography className=" text-justify">
                                                    No feedback available.
                                                </Typography>
                                            )}
                                        </div>
                                    </div>
                                    {/* <Button size="sm">Details</Button> */}
                                </CardBody>
                            </Card>
                        ))
                    ) : (
                        <div className="w-fit  col-span-2 mx-auto justify-self-center">
                            <Alert
                                variant="ghost"
                                className="flex justify-center mx-auto text-center items-center"
                            >
                                <Typography className="w-full mx-auto text-center justify-center flex">
                                    No Past Participations.
                                </Typography>
                            </Alert>
                        </div>
                    )}
                </div>
            </div>
        </BaseLayout>
    );
};

export default PastTeams;
