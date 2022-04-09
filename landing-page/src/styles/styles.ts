import { SystemStyleObject } from "@chakra-ui/react"
import { Styles } from "@chakra-ui/theme-tools"

const styles: Styles = {
    global: (): SystemStyleObject => ({
        body: {
            bg: "background.900"
        },
        "body, #root": {
            minHeight: "100vh"
        },
        "#root": {
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        }
    })
}

export default styles
