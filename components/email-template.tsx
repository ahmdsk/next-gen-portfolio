import { Html, Head, Body, Container, Section, Text, Heading, Hr } from "@react-email/components"

interface ContactEmailTemplateProps {
  name: string
  email: string
  subject: string
  message: string
}

export function ContactEmailTemplate({ name, email, subject, message }: ContactEmailTemplateProps) {
  return (
    <Html>
      <Head />
      <Body style={main}>
        <Container style={container}>
          <Section style={section}>
            <Heading style={h1}>New Contact Form Submission 📧</Heading>

            <Text style={text}>
              <strong>From:</strong> {name}
            </Text>

            <Text style={text}>
              <strong>Email:</strong> {email}
            </Text>

            <Text style={text}>
              <strong>Subject:</strong> {subject}
            </Text>

            <Hr style={hr} />

            <Text style={text}>
              <strong>Message:</strong>
            </Text>

            <Text style={messageText}>{message}</Text>

            <Hr style={hr} />

            <Text style={footer}>This email was sent from the DevStudio contact form.</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
}

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
}

const section = {
  padding: "0 48px",
}

const h1 = {
  color: "#333",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "40px 0",
  padding: "0",
}

const text = {
  color: "#333",
  fontSize: "16px",
  margin: "24px 0",
}

const messageText = {
  color: "#333",
  fontSize: "16px",
  margin: "24px 0",
  padding: "16px",
  backgroundColor: "#f8f9fa",
  borderRadius: "8px",
  border: "1px solid #e9ecef",
}

const hr = {
  borderColor: "#e6ebf1",
  margin: "20px 0",
}

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  lineHeight: "16px",
}
