import { NextRequest, NextResponse } from 'next/server';

// Contact form data interface
interface ContactFormData {
  nombre: string;
  email: string;
  empresa?: string;
  tipoProyecto?: string;
  presupuesto?: string;
  mensaje: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();
    const { nombre, email, empresa, tipoProyecto, presupuesto, mensaje } = body;

    // Validate required fields
    if (!nombre || !email || !mensaje) {
      return NextResponse.json(
        { error: 'Nombre, email y mensaje son requeridos' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      );
    }

    // Check if Resend API key is configured
    const resendApiKey = process.env.RESEND_API_KEY;
    
    if (resendApiKey) {
      // Send email using Resend
      const emailResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'Synkub Web <onboarding@resend.dev>',
          to: ['jhayro.chavez@synkub.com'], // Your email
          reply_to: email,
          subject: `Nueva Cotización de ${nombre} - ${tipoProyecto || 'Proyecto'}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <div style="background: linear-gradient(135deg, #2563eb 0%, #4f46e5 100%); padding: 30px; border-radius: 10px 10px 0 0;">
                <h1 style="color: white; margin: 0; font-size: 24px;">Nueva Solicitud de Cotización</h1>
              </div>
              <div style="background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 10px 10px;">
                <h2 style="color: #1f2937; margin-top: 0;">Información del Cliente</h2>
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #6b7280;">Nombre:</td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #1f2937;">${nombre}</td>
                  </tr>
                  <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #6b7280;">Email:</td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #1f2937;"><a href="mailto:${email}" style="color: #2563eb;">${email}</a></td>
                  </tr>
                  ${empresa ? `
                  <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #6b7280;">Empresa:</td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #1f2937;">${empresa}</td>
                  </tr>
                  ` : ''}
                  ${tipoProyecto ? `
                  <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #6b7280;">Tipo de Proyecto:</td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #1f2937;">${tipoProyecto}</td>
                  </tr>
                  ` : ''}
                  ${presupuesto ? `
                  <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #6b7280;">Presupuesto:</td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #1f2937;">${presupuesto}</td>
                  </tr>
                  ` : ''}
                </table>
                
                <h2 style="color: #1f2937; margin-top: 30px;">Mensaje</h2>
                <div style="background: white; padding: 20px; border-radius: 8px; border: 1px solid #e5e7eb;">
                  <p style="color: #374151; line-height: 1.6; margin: 0; white-space: pre-wrap;">${mensaje}</p>
                </div>
                
                <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center;">
                  <p style="color: #9ca3af; font-size: 12px; margin: 0;">
                    Este mensaje fue enviado desde el formulario de contacto de synkub.com
                  </p>
                </div>
              </div>
            </div>
          `,
        }),
      });

      if (!emailResponse.ok) {
        const errorData = await emailResponse.json();
        console.error('Resend error:', errorData);
        return NextResponse.json(
          { error: 'Error al enviar el email' },
          { status: 500 }
        );
      }

      return NextResponse.json(
        { message: 'Solicitud enviada exitosamente', success: true },
        { status: 200 }
      );
    } else {
      // Fallback: Log the submission (for development/testing)
      console.log('=== Nueva Solicitud de Cotización ===');
      console.log('Nombre:', nombre);
      console.log('Email:', email);
      console.log('Empresa:', empresa || 'No especificada');
      console.log('Tipo de Proyecto:', tipoProyecto || 'No especificado');
      console.log('Presupuesto:', presupuesto || 'No especificado');
      console.log('Mensaje:', mensaje);
      console.log('=====================================');
      
      // In production without Resend, you could also:
      // 1. Save to a database
      // 2. Send to a webhook
      // 3. Use another email service
      
      return NextResponse.json(
        { 
          message: 'Solicitud recibida. Configure RESEND_API_KEY para envío de emails.',
          success: true,
          note: 'Email no enviado - API key no configurada'
        },
        { status: 200 }
      );
    }
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
