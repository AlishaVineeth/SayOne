package com.example.bhagya.calculator;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

public class MainActivity extends AppCompatActivity {
    EditText txt;
    Button b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b16,b11,b12,b15,b14;
    String str1="0";
    String ss,sp,result;
    int x,z,y;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        txt=(EditText)findViewById(R.id.editText);
        b1=(Button)findViewById(R.id.button);
        b1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
              str1=txt.getText().toString();
                if(str1.equals("0")){
                    txt.setText("1");
                }
                else{
                    txt.setText(str1+"1");
                }

            }
        });
        b2=(Button)findViewById(R.id.button2);
        b2.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                str1=txt.getText().toString();
                if(str1.equals("0")){
                    txt.setText("2");
                }
                else{
                    txt.setText(str1+"2");
                }
            }
        });
        b3=(Button)findViewById(R.id.button3);
        b3.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                str1=txt.getText().toString();
                if(str1.equals("0")){
                    txt.setText("3");
                }
                else{
                    txt.setText(str1+"3");
                }
            }
        });
        b5=(Button)findViewById(R.id.button5);
        b5.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                str1=txt.getText().toString();
                if(str1.equals("0")){
                    txt.setText("4");
                }
                else{
                    txt.setText(str1+"4");
                }
            }

        });
        b6=(Button)findViewById(R.id.button6);
        b6.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                str1=txt.getText().toString();
                if(str1.equals("0")){
                    txt.setText("5");
                }
                else{
                    txt.setText(str1+"5");
                }
            }
        });
        b7=(Button)findViewById(R.id.button7);
        b7.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                str1=txt.getText().toString();
                if(str1.equals("0")){
                    txt.setText("6");
                }
                else{
                    txt.setText(str1+"6");
                }
            }
        });
        b8=(Button)findViewById(R.id.button8);
        b8.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                str1=txt.getText().toString();
                if(str1.equals("0")){
                    txt.setText("7");
                }
                else{
                    txt.setText(str1+"7");
                }
            }
        });
        b9=(Button)findViewById(R.id.button9);
        b9.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                str1=txt.getText().toString();
                if(str1.equals("0")){
                    txt.setText("8");
                }
                else{
                    txt.setText(str1+"8");
                }
            }
        });
        b10=(Button)findViewById(R.id.button10);
        b10.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                str1=txt.getText().toString();
                if(str1.equals("0")){
                    txt.setText("9");
                }
                else{
                    txt.setText(str1+"9");
                }
            }
        });
        b14=(Button)findViewById(R.id.button14);
        b14.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                str1=txt.getText().toString();
                if(str1.equals("0")){
                    txt.setText("0");
                }
                else{
                    txt.setText(str1+"0");
                }
            }
        });
        b4=(Button)findViewById(R.id.button4);
        b4.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                ss=txt.getText().toString();
                sp="+";
                str1="0";
                txt.setText("");
            }
        });
        b11=(Button)findViewById(R.id.button11);
        b11.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                ss=txt.getText().toString();
                sp="-";
                str1="0";
                txt.setText("");
            }
        });
        b12=(Button)findViewById(R.id.button12);
        b12.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                ss=txt.getText().toString();
                sp="*";
                str1="0";
                txt.setText("");
            }
        });
        b15=(Button)findViewById(R.id.button15);
        b15.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                ss=txt.getText().toString();
                sp="/";
                str1="0";
                txt.setText("");
            }
        });
        b16=(Button)findViewById(R.id.button16);
        b16.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if(sp.equals("+")){
                  z=Integer.parseInt(ss);
                    str1=txt.getText().toString();
                    y=Integer.parseInt(str1);
                    x=z+y;
                  result=String.valueOf(x);
                    txt.setText(result);
                    str1=result;
                }
                else if(sp.equals("-")){
                    z=Integer.parseInt(ss);
                    str1=txt.getText().toString();
                    y=Integer.parseInt(str1);
                    x=z-y;
                    result=String.valueOf(x);
                    txt.setText(result);
                    str1=result;
                }
                else if(sp.equals("*")){
                    z=Integer.parseInt(ss);
                    str1=txt.getText().toString();
                    y=Integer.parseInt(str1);
                    x=z*y;
                    result=String.valueOf(x);
                    txt.setText(result);
                    str1=result;
                }else if(sp.equals("/")){
                    z=Integer.parseInt(ss);
                    str1=txt.getText().toString();
                    y=Integer.parseInt(str1);
                    x=z/y;
                    result=String.valueOf(x);
                    txt.setText(result);
                    str1=result;
                }
            }
        });
    }
}
